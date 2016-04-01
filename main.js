// Je charge le document JavaScript
$( document ).ready(function() {

	console.log ("JQuery chargé via main.js");


	//SECTION TABLEAU
	// Je déclare mes valeurs dans un tableau associatif nommé tableau
	var tableau = { 
		"janvier" : 340345,
		"février" : 243031, 
		"mars": 187659,
		"avril": 401894,
		"mai": 397054,
		"juin": 405934,
		"juillet": 505043,
		"août": 560431,
		"septembre": 630337,
		"octobre": 713979,
		"novembre": 945098,
		"décembre": 1434540,
	};


	// Je parcours mon tableau grace à une boucle for in qui me donne mes clés/valeurs
	for(var key in tableau)
	{
	  var value = tableau[key];

	  // J'affiche dans la console pour m'assurer de bien récupérer mes valeurs
	  console.log(key + " = " + value + '<br>');

	  //J'injecte mes données ligne par ligne, colonne 1 = key = mois , colonne 2 = value = valeur
	  $( "#myDataTab" ).append( "<tr><td>"+key+"</td><td>"+value+"</td></tr>");
	}







	// CHARGEMENT DU GRAPHIQUE VIA CHART.JS
		// Ici je suis la methode donnée par chart.js : http://www.chartjs.org/docs/

		//  1.On donne les datas à notre graphe. Je réécris les données cités plus haut à la main. 
		//  Il aurait été préférable de tout écrire dans un  même objet.
			
			var data = [
		    {
		        value: 340345,
		        color:"#F7464A",
		        highlight: "#FF5A5E",
		        label: "Janvier"
		    },
		    {
		        value: 243031,
		        color: "#46BFBD",
		        highlight: "#5AD3D1",
		        label: "Février"
		    },
		    {
		        value: 187659,
		        color: "#FDB45C",
		        highlight: "#FFC870",
		        label: "Mars"
		    },
		    {
		        value: 401894,
		        color: "#949FB1",
		        highlight: "#A8B3C5",
		        label: "Avril"
		    },
		    {
		        value: 397054,
		        color: "#4D5360",
		        highlight: "#616774",
		        label: "Mai"
		    },
		    {
		        value: 405934,
		        color: "#46d377",
		        highlight: "#616774",
		        label: "Juin"
		    },
		    {
		        value: 505043,
		        color: "#439faf",
		        highlight: "#616774",
		        label: "Juillet"
		    },
		    {
		        value: 560431,
		        color: "#d1b7f5",
		        highlight: "#616774",
		        label: "Août"
		    },
		    {
		        value: 630337,
		        color: "#b42637",
		        highlight: "#616774",
		        label: "Septembre"
		    },
		    {
		        value: 713979,
		        color: "#17ff03",
		        highlight: "#616774",
		        label: "Octobre"
		    },
		    {
		        value: 945098,
		        color: "#01593c",
		        highlight: "#616774",
		        label: "Novembre"
		    },
		    {
		        value: 1434540,
		        color: "#4D5360",
		        highlight: "#616774",
		        label: "Décembre"
		    }

			];


			// 2. On crée la chart qui s'injecte automatiquement dans le Canvas

			// Get context with jQuery - using jQuery's .get() method.
			var ctx = $("#myChart").get(0).getContext("2d");
			// This will get the first returned node in the jQuery collection.
			var myNewChart = new Chart(ctx).PolarArea(data);

			// 3. On définit les caractéristiques "responsive" du graphe

			Chart.defaults.global = {
			    // Boolean - whether or not the chart should be responsive and resize when the browser does.
			    responsive: true,
			      // Boolean - Whether the scale should begin at zero
    			scaleBeginAtZero : false,

			}

			// 4. Je cache le graph ici, il apparaitra plus tard
			$('#monGraph').hide();

			








	//SECTION BOUTON
	// Création du bouton qui permettra d'afficher le tableau. On l'injecte dans la DIV#bouton gràce au sélecteur JQuery
		$("#divBouton").append("<button type='button' class='btn btn-success' id='btnTab'>Afficher le tableau</button>");

	// Création du bouton qui permettra d'afficher le graph. On l'injecte dans la DIV#bouton gràce au sélecteur JQuery
		$("#divBouton").append("<button type='button' class='btn btn-success' id='btnGraph'>Afficher le graphique</button>");

		
	//Création d'une fonction qui affichera selon la situation un bouton ou l'autre
	function changeBtn() {
		if ($('#monGraph').css('display') == 'none') {
				$('#btnTab').hide();
				$('#btnGraph').show();			
		} 
		else {
			$('#btnTab').show();
			$('#btnGraph').hide();	

		}
	}

	// On appelle la fonction une première fois
	changeBtn();


	// Je code le comportement du bouton qui affichera le graphe et fera disparaitre le tableau
	$("#btnGraph").click(function()  {

		$('#divTable').hide();
		$('#monGraph').show();

		changeBtn();

	});


	// Je code le comportement du bouton qui affichera le tableau et fera disparaitre le graphe 
	$("#btnTab").click(function()  {

		$('#divTable').show();
		$('#monGraph').hide();

		changeBtn();

	});






});