#!/usr/bin/perl -wT

# Copyright (C) 1994 - 2001  eXtropia.com
#
# This program is free software; you can redistribute it and/or
# modify it under the terms of the GNU General Public License
# as published by the Free Software Foundation; either version 2
# of the License, or (at your option) any later version.
#
# This program is distributed in the hope that it will be useful,
# but WITHOUT ANY WARRANTY; without even the implied warranty of
# MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
# GNU General Public License for more details.
#
# You should have received a copy of the GNU General Public License
# along with this program; if not, write to the Free Software
# Foundation, Inc., 59 Temple Place - Suite 330,
# Boston, MA  02111-1307, USA.

use strict;

use lib qw(
    /hsphere/shared/perl/Extropia/Modules
    /hsphere/shared/perl/Extropia/ActionHandlers
    /hsphere/shared/perl/Extropia/Views/Extropia/WebDB
    /hsphere/shared/perl/Extropia/Views/Extropia/WebDB/Guestbook
    /hsphere/shared/perl/Extropia/Views/Extropia/AuthManager
    /hsphere/shared/perl/Extropia/Views/Extropia/StandardTemplates
);

          # The following is only of interest to mod_perl, PerlEx,
          # and other Perl acceleration users

unshift @INC, qw(
    /hsphere/shared/perl/Extropia/Modules
    /hsphere/shared/perl/Extropia/ActionHandlers
    /hsphere/shared/perl/Extropia/Views/Extropia/WebDB
    /hsphere/shared/perl/Extropia/Views/Extropia/WebDB/Guestbook
    /hsphere/shared/perl/Extropia/Views/Extropia/AuthManager
    /hsphere/shared/perl/Extropia/Views/Extropia/StandardTemplates
) if ($INC[0] ne "../../Modules");

use CGI qw(-debug);
use CGI::Carp qw(fatalsToBrowser);

use Extropia::App::DBApp;
use Extropia::View;
use Extropia::SessionManager;

my $CGI = new CGI() or
    die("Unable to construct the CGI object" .
        ". Please contact the webmaster.");

my $VIEW_LOADER = new Extropia::View() or
    die("Unable to construct the VIEW LOADER object in " . $CGI->script_name() .
        ". Please contact the webmaster.");

my $DATAFILES_DIRECTORY = "./Datafiles";

foreach ($CGI->param()) {
    $CGI->param($1,$CGI->param($_)) if (/(.*)\.x/);
}
                
######################################################################
#                      DATA HANDLER SETUP                            #
######################################################################

my @ADD_FORM_DHM_CONFIG_PARAMS = (
    -TYPE         => 'CGI',
    -CGI_OBJECT   => $CGI,
    -DATAHANDLERS => [qw(
        Exists
        HTML
        String
        )],

    -FIELD_MAPPINGS => {
        'fname'   => 'First Name',
        'lname'   => 'Last Name',
        'email'  => 'Email',
        'location' => 'Location',
        'comments' => 'Comments',
    },

    -RULES => [
        -ESCAPE_HTML_TAGS => [
            -FIELDS => [qw(
                *
            )],
        ],

        -SUBSTITUTE_ONE_STRING_FOR_ANOTHER => [
            -FIELDS => [qw(
                *
            )],
            -ORIGINAL_STRING => '"',
            -NEW_STRING => "''"
        ],

        -IS_FILLED_IN => [
            -FIELDS => [qw(
                comments
            )]
        ]
    ]
);

my @DATA_HANDLER_MANAGER_CONFIG_PARAMS = (
    -ADD_FORM_DHM_CONFIG_PARAMS    => \@ADD_FORM_DHM_CONFIG_PARAMS
);

######################################################################
#                      DATASOURCE SETUP                              #
######################################################################

my @DATASOURCE_FIELD_NAMES = qw(
        record_id
        fname
        lname
        location
        email
        comments
        reviewed_by_admin
        date_time_posted
);

my %BASIC_INPUT_WIDGET_DEFINITIONS = (
    lname => [
        -DISPLAY_NAME => 'Last Name',
        -TYPE         => 'textfield',
        -NAME         => 'lname',
        -SIZE         => 30,
        -MAXLENGTH    => 80
    ],

    fname => [
        -DISPLAY_NAME => 'First Name',
        -TYPE         => 'textfield',
        -NAME         => 'fname',
        -SIZE         => 30,
        -MAXLENGTH    => 80
    ],

    location => [
        -DISPLAY_NAME => 'Location',
        -TYPE         => 'textfield',
        -NAME         => 'location',
        -SIZE         => 30,
        -MAXLENGTH    => 80
    ],

    email => [
        -DISPLAY_NAME => 'Email',
        -TYPE         => 'textfield',
        -NAME         => 'email',
        -SIZE         => 30,
        -MAXLENGTH    => 80
    ],

    comments => [
        -DISPLAY_NAME => 'Comments',
        -TYPE         => 'textarea',
        -NAME         => 'comments',
        -ROWS         => 6,
        -COLS         => 30,
        -WRAP         => 'VIRTUAL'
    ]
);

my @BASIC_INPUT_WIDGET_DISPLAY_ORDER = qw(
    fname
    lname
    location
    email
    comments
);

my @INPUT_WIDGET_DEFINITIONS = (
    -BASIC_INPUT_WIDGET_DEFINITIONS => \%BASIC_INPUT_WIDGET_DEFINITIONS,
    -BASIC_INPUT_WIDGET_DISPLAY_ORDER => \@BASIC_INPUT_WIDGET_DISPLAY_ORDER
);

my @BASIC_DATASOURCE_CONFIG_PARAMS = (
    -TYPE                       => 'File', 
    -CREATE_FILE_IF_NONE_EXISTS => 1,
    -FILE                       => "$DATAFILES_DIRECTORY/guestbook.dat",
    -COMMENT_PREFIX             => '#',
    -FIELD_DELIMITER            => '|',
    -FIELD_NAMES                => \@DATASOURCE_FIELD_NAMES,
    -KEY_FIELDS                 => ['record_id'],
    -FIELD_TYPES                => {
        record_id => 'Autoincrement'
        }
);

my @DATASOURCE_CONFIG_PARAMS = (
    -BASIC_DATASOURCE_CONFIG_PARAMS     => \@BASIC_DATASOURCE_CONFIG_PARAMS,
);

######################################################################
#                          MAILER SETUP                              #
######################################################################
           
my @MAIL_CONFIG_PARAMS = (     
    -TYPE         => 'Sendmail'
);

my @EMAIL_DISPLAY_FIELDS = qw(
        subject
        abstract
        full_text
);

my @ADD_EVENT_MAIL_SEND_PARAMS = (
    -FROM     => $CGI->param('email'),
    -TO       => 'you@yourdomain.com',
    -REPLY_TO => 'you@yourdomain.com',
    -SUBJECT  => 'Guestbook Addition'
);

my @MAIL_SEND_PARAMS = (
    -ADD_EVENT_MAIL_SEND_PARAMS    => \@ADD_EVENT_MAIL_SEND_PARAMS,
);

##################################################################
#                         LOGGING SETUP                          #
##################################################################

my @LOG_CONFIG_PARAMS = (
    -TYPE             => 'File',
    -LOG_FILE         => "$DATAFILES_DIRECTORY/guestbook.log",
    -LOG_ENTRY_SUFFIX => '|' . _generateEnvVarsString() . '|',
    -LOG_ENTRY_PREFIX => 'Guestbook|'
);

sub _generateEnvVarsString {
    my @env_values;
    
    my $key;
    foreach $key (keys %ENV) {
        push (@env_values, "$key=" . $ENV{$key});
    }   
    return join ("\|", @env_values);
}   
   
######################################################################
#                          VIEW SETUP                                #
######################################################################

my @VALID_VIEWS = qw(
    CSSView
    AddAcknowledgementView
    AddRecordConfirmationView
    SessionTimeoutErrorView
    AddRecordView
    GuestbookView
);

my @VIEW_DISPLAY_PARAMS = (
    -INPUT_WIDGET_DEFINITIONS   => \@INPUT_WIDGET_DEFINITIONS,
    -APPLICATION_LOGO        => 'logo.gif',
    -APPLICATION_LOGO_HEIGHT => '40',
    -APPLICATION_LOGO_WIDTH  => '353',
    -APPLICATION_LOGO_ALT    => 'Guestbook Demo',
    -HTTP_HEADER_PARAMS      => [-EXPIRES => '-1d'],
    -DOCUMENT_ROOT_URL       => '/',
    -IMAGE_ROOT_URL          => '/cp/images/Extropia',
    -LINK_TARGET             => '_self',
    -SCRIPT_DISPLAY_NAME     => 'Guestbook',
    -SCRIPT_NAME             => $CGI->script_name(),
    -EMAIL_DISPLAY_FIELDS    => \@EMAIL_DISPLAY_FIELDS,
    -HOME_VIEW               => 'GuestbookView',
    -FIELD_NAME_MAPPINGS     => {
        fname   => "First Name",
        lname   => "Last Name",
        email  => "Email",
        location => "Location",
        comments => "Comments"
        },
    -DISPLAY_FIELDS        => [qw(
        fname
        lname
        email
        location
        comments
        )],
    -SELECTED_DISPLAY_FIELDS        => [qw(
        fname
        lname
        email
        location
        comments
        )],
    -SORT_FIELDS             => [qw(
        fname
        )]
);  

######################################################################
#                           FILTER SETUP                             #
######################################################################

my @HTMLIZE_FILTER_CONFIG_PARAMS = (
    -TYPE            => 'HTMLize',
    -CONVERT_DOUBLE_LINEBREAK_TO_P => 1,
    -CONVERT_LINEBREAK_TO_BR => 1,
);

my @CHARSET_FILTER_CONFIG_PARAMS = (
    -TYPE            => 'CharSet'
);

my @EMBED_FILTER_CONFIG_PARAMS = (
    -TYPE            => 'Embed',
    -ENABLE          => 0
);

my @VIEW_FILTERS_CONFIG_PARAMS = (
     \@HTMLIZE_FILTER_CONFIG_PARAMS,
     \@CHARSET_FILTER_CONFIG_PARAMS,
     \@EMBED_FILTER_CONFIG_PARAMS
);


######################################################################
#                      ACTION/WORKFLOW SETUP                         #
######################################################################

my @ACTION_HANDLER_LIST = qw(
    DisplayCSSViewAction
    DisplaySessionTimeoutErrorAction
    DownloadFileAction
    DisplayAddFormAction
    DisplayAddRecordConfirmationAction
    ProcessAddRequestAction
    DisplayBasicDataViewAction
    DefaultAction
);

my @ACTION_HANDLER_ACTION_PARAMS = (
    -ACTION_HANDLER_LIST                    => \@ACTION_HANDLER_LIST,
    -ADD_ACKNOWLEDGEMENT_VIEW_NAME          => 'AddAcknowledgementView',
    -ADD_RECORD_CONFIRMATION_VIEW_NAME      => 'AddRecordConfirmationView',
    -ALLOW_ADDITIONS_FLAG                   => 1,
    -ADD_FORM_VIEW_NAME                     => 'AddRecordView',
    -ADD_EMAIL_BODY_VIEW                    => 'AddEventEmailView',
    -BASIC_DATA_VIEW_NAME                   => 'GuestbookView',
    -CGI_OBJECT                             =>  $CGI,
    -CSS_VIEW_URL   => $CGI->script_name() . "?display_css_view=on",
    -CSS_VIEW_NAME  => "CSSView",
    -DATA_HANDLER_MANAGER_CONFIG_PARAMS     => \@DATA_HANDLER_MANAGER_CONFIG_PARAMS,
    -DEFAULT_SORT_FIELD1                    => 'title',
    -DEFAULT_SORT_FIELD2                    => 'abstract',
    -DISPLAY_ACKNOWLEDGEMENT_ON_ADD_FLAG    => 1,
    -DISPLAY_CONFIRMATION_ON_ADD_FLAG       => 1,
    -DATASOURCE_CONFIG_PARAMS               => \@DATASOURCE_CONFIG_PARAMS,
    -HIDDEN_ADMIN_FIELDS_VIEW_NAME          => 'HiddenAdminFieldsView',
    -URL_ENCODED_ADMIN_FIELDS_VIEW_NAME     => 'URLEncodedAdminFieldsView',
    -LOG_CONFIG_PARAMS                      => \@LOG_CONFIG_PARAMS,
    -MAIL_CONFIG_PARAMS                     => \@MAIL_CONFIG_PARAMS,
    -MAIL_SEND_PARAMS                       => \@MAIL_SEND_PARAMS,
    -SEND_EMAIL_ON_ADD_FLAG                 => 0,
    -SESSION_TIMEOUT_VIEW_NAME              => 'SessionTimeoutErrorView',
    -VIEW_FILTERS_CONFIG_PARAMS             => \@VIEW_FILTERS_CONFIG_PARAMS,
    -VIEW_DISPLAY_PARAMS                    => \@VIEW_DISPLAY_PARAMS,
    -VALID_VIEWS                            => \@VALID_VIEWS,
    -VIEW_LOADER                            => $VIEW_LOADER,
    -MAX_RECORDS_PER_PAGE                   => $CGI->param('records_per_page') || 10,
    -SORT_FIELD1                            => $CGI->param('sort_field1') || 'category',
    -SORT_FIELD2                            => $CGI->param('sort_field2') || 'fname',
    -SORT_DIRECTION                         => $CGI->param('sort_direction') || 'DESC',
    -SIMPLE_SEARCH_STRING                   => $CGI->param('simple_search_string') || "",
    -FIRST_RECORD_ON_PAGE                   => $CGI->param('first_record_to_display') || 0,
    -LAST_RECORD_ON_PAGE                    => $CGI->param('first_record_to_display') || "0",
    -KEY_FIELD                              => 'record_id',
    -PAGE_TOP_VIEW                          => 'PageTopView',
    -PAGE_BOTTOM_VIEW                       => 'PageBottomView'
);

######################################################################
#                      LOAD APPLICATION                              #
######################################################################

my $APP = new Extropia::App::DBApp(
    -ACTION_HANDLER_ACTION_PARAMS => \@ACTION_HANDLER_ACTION_PARAMS,
    -ACTION_HANDLER_LIST          => \@ACTION_HANDLER_LIST,
    -VIEW_DISPLAY_PARAMS          => \@VIEW_DISPLAY_PARAMS
    ) or die("Unable to construct the application object in " . 
             $CGI->script_name() . ". Please contact the webmaster.");

print $APP->execute();


