#!"D:\xampp\perl\bin\perl.exe"

# Confirm that perl is located in the /usr/bin/perl folder on the server

#All perl scripts should use strict
use strict;

use CGI;
my $cgi_object = new CGI();

# Print out the http header 
print $cgi_object->header();


# Retrieve the value of the skey parameter 
my $id = $cgi_object->param('id');
my $pwd  = $cgi_object->param('pwd');

# These are sample orders stored in JSON
my @customerOrders = (
    { id => "RW301",
      password => "kaboom",
      orders =>
      '{
         "username" : "Rachel Wilson",
         "status" : "Orders Found",
         "totalCharges" : "$379.49",
         "orderHistory" : [   
            {
               "orderDate" : "6/16/2024",
               "orderCost" : "$180.75",
               "products" : [
                  {
                    "description" : "Long Sparklers (box 20)",
                    "qty" : "1",
                    "price" : "$19.95",
                    "total" : "$19.95"
                  },
                  {
                    "description" : "Goblin Fountain",
                    "qty" : "2",
                    "price" : "$29.95",
                    "total" : "$59.90"
                  },  
                  {
                    "description" : "Dragon Fountain",
                    "qty" : "2",
                    "price" : "$25.50",
                    "total" : "$51.00"
                  },    
                  {
                    "description" : "Nighteyes (box 10)",
                    "qty" : "1",
                    "price" : "$29.95",
                    "total" : "$29.95"
                  },  
                  {
                    "description" : "Assorted Items Box #1",
                    "qty" : "1",
                    "price" : "$19.95",
                    "total" : "$19.95"
                  }                 
               ]
            },
            {
               "orderDate" : "6/11/2024",
               "orderCost" : "$198.74",
               "products" : [
                  {
                    "description" : "Assorted Items Box #2",
                    "qty" : "1",
                    "price" : "$29.95",
                    "total" : "$29.95"
                  },
                  {
                    "description" : "Phoenix Fountain",
                    "qty" : "2",
                    "price" : "$34.42",
                    "total" : "$68.84"
                  },  
                  {
                    "description" : "Firecracker 80 Strings of 16",
                    "qty" : "4",
                    "price" : "$7.50",
                    "total" : "$30.00"
                  },    
                  {
                    "description" : "Bottle rockets with stars and report (box 20)",
                    "qty" : "5",
                    "price" : "$13.99",
                    "total" : "$69.95"
                  }                
               ]
            }            
         ]
      }'
    },
    { id => "BA684",
      password => "sparkler",
      orders =>
      '{
         "username" : "Bernard Adams",
         "status" : "Orders Found",
         "totalCharges" : "$187.00",         
         "orderHistory" : [   
            {
               "orderDate" : "6/17/2024",
               "orderCost" : "$326.85",
               "products" : [
                  {
                    "description" : "Pyro blast Assortment #2",
                    "qty" : "1",
                    "price" : "$79.95",
                    "total" : "$79.95"
                  },
                  {
                    "description" : "Screaming Dragons",
                    "qty" : "2",
                    "price" : "$29.95",
                    "total" : "$59.90"
                  },  
                  {
                    "description" : "Whistling Artillery (case)",
                    "qty" : "2",
                    "price" : "$93.50",
                    "total" : "$187.00"
                  }          
               ]
            }            
         ]
      }'      
    }
);

# Keep track of the number of hits using the count variable
my $count = 0;

foreach my $row (@customerOrders) {
   if ($row->{id} =~ /^$id$/ && $row->{password} =~ /^$pwd$/) {
      $count++;
      print "$row->{orders}";
      last;
   }
}


# If no hits, print this fact
if ($count == 0) {
   print '{"status": "Orders Not Found"}';
}