<?php
// require_once "db.php";

// header("Access-Control-Allow-Origin: *");
// header("Access-Control-Allow-Headers: *");
// echo "Test";

// try {
//     $select_resultat = $db->prepare('SELECT * FROM backups');
//     $select_resultat->execute();
//     $resultats = $select_resultat->fetchAll(PDO::FETCH_ASSOC);
//     echo json_encode($resultats);
// } catch (Exception $e) {
//     echo json_encode(["Erreur" => $e->getMessage()]);
// }