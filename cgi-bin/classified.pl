#!/usr/bin/perl
##############################################################################
# classified                     Version 2.3.1                                #
# Copyright 1996 Matt Wright    mattw@worldwidemart.com                      #
# Created 4/21/95               Last Modified 10/29/95                       #
# Scripts Archive at:           http://www.worldwidemart.com/scripts/        #
##############################################################################
# COPYRIGHT NOTICE                                                           #
# Copyright 1996 Matthew M. Wright  All Rights Reserved.                     #
#                                                                            #
# classified may be used and modified free of charge by anyone so long as     #
# this copyright notice and the comments above remain intact.  By using this #
# code you agree to indemnify Matthew M. Wright from any liability that      #  
# might arise from it's use.                                                 #  
#                                                                            #
# Selling the code for this program without prior written consent is         #
# expressly forbidden.  In other words, please ask first before you try and  #
# make money off of my program.                                              #
#                                                                            #
# Obtain permission before redistributing this software over the Internet or #
# in any other medium.	In all cases copyright and header must remain intact.#
##############################################################################
# Set Variables

$classifiedurl = "http://www.pujari-atlanta.org/classified/classified.htm";
$classifiedreal = "/home/pujari-a/public_html/classified/classified.htm";
$log = "/home/pujari-a/public_html/classified/log.htm";
$cgiurl = "http://www.pujari-atlanta.org/cgi-bin/classified.pl";
$date_command = "/usr/bin/date";

# Set Your Options:
$mail = 1;              # 1 = Yes; 0 = No
$linkmail = 1;          # 1 = Yes; 0 = No
$separator = 1;         # 1 = <hr>; 0 = <p>
$entry_order = 1;       # 1 = Newest entries added first;
                        # 0 = Newest Entries added last.
$remote_mail = 1;       # 1 = Yes; 0 = No
$allow_html = 1;        # 1 = Yes; 0 = No
$line_breaks = 1;	# 1 = Yes; 0 = No

# If you answered 1 to $mail or $remote_mail you will need to fill out 
# these variables below:
$mailprog = '/usr/lib/sendmail';
$recipient = 'pujariinc@yahoo.com';

# Done
##############################################################################

# Get the Date for Entry
$date = `$date_command +"%A, %B %d, %Y at %T (%Z)"`; chop($date);
$shortdate = `$date_command +"%D %T %Z"`; chop($shortdate);

# Get the input
read(STDIN, $buffer, $ENV{'CONTENT_LENGTH'});

# Split the name-value pairs
@pairs = split(/&/, $buffer);

foreach $pair (@pairs) {
   ($name, $value) = split(/=/, $pair);

   # Un-Webify plus signs and %-encoding
   $value =~ tr/+/ /;
   $value =~ s/%([a-fA-F0-9][a-fA-F0-9])/pack("C", hex($1))/eg;
   $value =~ s/<!--(.|\n)*-->//g;

   if ($allow_html != 1) {
      $value =~ s/<([^>]|\n)*>//g;
   }

   $FORM{$name} = $value;
}

&exit_out unless $FORM{'realname'};

&exit_out unless $FORM{'comments'};

# Begin the Editing of the classified File
open (FILE,"$classifiedreal") || die "Can't Open $classifiedreal: $!\n";
@LINES=<FILE>;
close(FILE);
$SIZE=@LINES;

# Open Link File to Output
open (classified,">$classifiedreal") || die "Can't Open $classifiedreal: $!\n";

for ($i=0;$i<=$SIZE;$i++) {
   $_=$LINES[$i];
   if (/<!--begin-->/) { 

      if ($entry_order eq '1') {
         print classified "<!--begin-->\n";
      }
   
      if ($line_breaks == 1) {
         $FORM{'comments'} =~ s/\cM\n/<br>\n/g;
      }

      print classified "Category: $FORM{'category'}<br>";

      print classified "$FORM{'comments'}<br>\n";

      if ($FORM{'url'}) {
         print classified "URL: <a href=\"$FORM{'url'}\" target=\"_blank\">$FORM{'url'}</a><br>";
      }
      else {
         print classified "$FORM{'realname'}<br>";
      }

      if ( $FORM{'address'} ){
         print classified "$FORM{'address'}<br>";
      }

      if ( $FORM{'city'} ){
         print classified "$FORM{'city'},";
      }
     
      if ( $FORM{'state'} ){
         print classified " $FORM{'state'} - ";
      }

      if ( $FORM{'ZIP'} ){
         print classified " $FORM{'ZIP'}<br>";
      }

      if ( $FORM{'phone'} ){
         print classified "Phone: $FORM{'phone'}<br>";
      }

      if ( $FORM{'username'} ){
         if ($linkmail eq '1') {
            print classified " e-Mail: <a href=\"mailto:$FORM{'username'}\">";
            print classified "$FORM{'realname'}</a>";
         }
         else {
            print classified " &lt;$FORM{'username'}&gt;";
         }
      }

      print classified "<br>\n";

      if ($separator eq '1') {
         print classified " $date<hr>\n\n";
      }
      else {
         print classified " $date<p>\n\n";
      }

      if ($entry_order eq '0') {
         print classified "<!--begin-->\n";
      }

   }
   else {
      print classified $_;
   }
}

close (classified);


#########
# Options

# Mail Option
if ($mail eq '1') {
   open (MAIL, "|$mailprog $recipient") || die "Can't open $mailprog!\n";

   print MAIL "Reply-to: $FORM{'username'} ($FORM{'realname'})\n";
   print MAIL "From: $FORM{'username'} ($FORM{'realname'})\n";
   print MAIL "Subject: Entry to classified\n\n";
   print MAIL "You have a new entry in your classified:\n\n";
   print MAIL "------------------------------------------------------\n";
   print MAIL "$FORM{'comments'}\n";
   print MAIL "$FORM{'realname'}\n";

   if ( $FORM{'username'} ){
      print MAIL "e-Mail: $FORM{'username'}\n";
   }

      if ( $FORM{'address'} ){
         print MAIL "$FORM{'address'}\n";
      }

   if ( $FORM{'city'} ){
      print MAIL "$FORM{'city'},";
   }

   if ( $FORM{'state'} ){
      print MAIL " $FORM{'state'}";
   }

   if ( $FORM{'ZIP'} ){
      print MAIL "-$FORM{'ZIP'}\n";
   }

      if ( $FORM{'phone'} ){
         print MAIL "Phone: $FORM{'phone'}\n";
      }

   if ( $FORM{'url'} ){
      print MAIL "URL: $FORM{'url'}\n";
   }      if ( $FORM{'category'} ){
         print MAIL "In category: $FORM{'category'}\n";
      }

   print MAIL "------------------------------------------------------\n";

   close (MAIL);
}

if ($remote_mail eq '1' && $FORM{'username'}) {
   open (MAIL, "|$mailprog -t") || die "Can't open $mailprog!\n";

   print MAIL "To: $FORM{'username'}\n";
   print MAIL "From: $recipient\n";
   print MAIL "Subject: Entry to classified\n\n";
   print MAIL "Thank you for adding to my classified.\n\n";
   print MAIL "------------------------------------------------------\n";
   print MAIL "$FORM{'comments'}\n";
   print MAIL "$FORM{'realname'}\n";

   if ( $FORM{'username'} ){
      print MAIL "e-Mail: $FORM{'username'}\n";
   }

      if ( $FORM{'address'} ){
         print MAIL "$FORM{'address'}\n";
      }

   if ( $FORM{'city'} ){
      print MAIL "$FORM{'city'},";
   }

   if ( $FORM{'state'} ){
      print MAIL " $FORM{'state'}";
   }

   if ( $FORM{'ZIP'} ){
     print MAIL "-$FORM{'ZIP'}\n";
   }

      if ( $FORM{'phone'} ){
         print MAIL "Phone: $FORM{'phone'}\n";
      }

   if ( $FORM{'url'} ){
      print MAIL "URL: $FORM{'url'}\n";
   }       if ( $FORM{'category'} ){
         print MAIL "In category: $FORM{'category'}\n";
      }

   print MAIL "------------------------------------------------------\n";

   close (MAIL);
}

# Print Out Initial Output Location Heading
   print "Location: $classifiedurl\n\n";
####################

# Subroutines

   sub exit_out {    print "Location: $classifiedurl\n\n";
  exit;   }

