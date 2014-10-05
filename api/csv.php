<?php
function array2csv(array &$array)
{
   if (count($array) == 0) {
     return null;
   }
   ob_start();
   $df = fopen("php://output", 'w');
   fputcsv($df, array_keys(reset($array)));
   foreach ($array as $row) {
      fputcsv($df, $row);
   }
   fclose($df);
   return ob_get_clean();
}

function download_send_headers() {
    // disable caching
    $now = gmdate("D, d M Y H:i:s");
    header("Expires: Tue, 03 Jul 2001 06:00:00 GMT");
    header("Cache-Control: max-age=0, no-cache, must-revalidate, proxy-revalidate");
    //header("Last-Modified: {$now} GMT");

    // force download  
    header("Content-Type: application/force-download");
    header("Content-Type: application/octet-stream");
    header("Content-Type: application/download");

    // disposition / encoding on response body
    header("Content-Disposition: attachment;filename=replies.csv");
    header("Content-Transfer-Encoding: binary");
}

function format_csv($table) {
    $fields = mysql_num_fields($table);
    
    for ( $i = 0; $i < $fields; $i++ )
    {
        $header .= mysql_field_name( $table , $i ) . "\t";
    }
    
    $header .= "\n";
    
    while( $row = mysql_fetch_row($table) )
    {
        $line = '';
        foreach( $row as $value )
        {                                            
            if ( ( !isset( $value ) ) || ( $value == "" ) )
            {
                $value = "\t";
            }
            else
            {
                $value = str_replace( '"' , '""' , $value );
                $value = '"' . $value . '"' . "\t";
            }
            $line .= $value;
        }
        $data .= trim( $line ) . "\n";
    }
    $data = str_replace( "\r" , "" , $data );

    if ( $data == "" )
    {
        $data = "\n(0) Records Found!\n";                        
    }

    return $header .$data;
}

function get_data() {
    $con = mysql_connect("localhost","root","root")
        or die("Unable to connect to MySQL");
  
    $export = mysql_query ("SELECT * FROM weddingsite.Replies", $con); 
    
    $csv = format_csv($export);
    mysql_close($con);
    
    return $csv;
}



download_send_headers();
echo get_data();

die();
?>
