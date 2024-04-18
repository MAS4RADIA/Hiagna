<?php
  session_start ();
  $name = $_GET ["name"];
  if ($_GET ["type"] == "fetch")
      {  print ($_SESSION [$name]);  }
  else
      {  $_SESSION [$name] = $_GET ["value"];  }
 ?>