/*Placing JavaScripts in external files has some advantages:

    It separates HTML and code.
    It makes HTML and JavaScript easier to read and maintain
    Cached JavaScript files can speed up page loads.
*/

/*
*	This object is used to hold the graph tabs 
*/


var graph_tabs {
	labels = ["admin_panel", "add_tab", "add_tab", "blankdfad_dfja", "dnfanann"];
	
	
	
	// Method used to add tab
	addTab: function(label){
		this.labels[this.labels.length] = label;
	} // End addTab function
	
	// Method used to remove tab
	removeTab: function(label){
		
	} // End removeTab function
	
}; // End graph_tabs object 

function render_handler() {
	//bdy_handle = document.getElementById("bdy");
	//alertbar_handle = document.getElementById("alertbar");
	
	header_handle = document.getElementById("header");
	header_handle.innerHTML = header_handler();	
	
	nav_handle = document.getElementById("nav");
	nav_handle.innerHTML = nav_handler();
	
	content_handle = document.getElementById("content");
	content_handle.innerHTML = content_handler();
	
	footer_handle = document.getElementById("footer");
	footer_handle.innerHTML = footer_handler();
}

function boot(){
	if(check_file_api()){
		//Will be used to load cookie for setting and session information
		//Have a single tab with + to add tabs. Will not render due to content override
		document.getElementById("content").innerHTML = "<div class=\".graph_tab\"></div>";
		render_handler();
	}
}

// On body load check that the File API's are supported, if not alert the issue.
function check_file_api(){
	if (window.File && window.FileReader && window.FileList && window.Blob) {
		// Great success! All the File APIs are supported.
		return 1;
	} else {
		document.getElementById("alertbar").innerHTML = 'The File APIs are not fully supported in this browser. Contact developer';
		return -1;
	}
}

// Generates content for the header
function bdy_handler(){
	content =  0;
	return content;
}

// Alert is use for error handling
function alertbar_handler(){
	content =  0;
	return content;
}

function header_handler(){
	url = "http://corp.ingrammicro.com/getattachment/6838aceb-aa32-4075-9d75-7eb22f0d6bd5/logo-ingram-micro.png.aspx";
	content =  "<img src=\""+url+"\"alt=\"Missing_Banner\">";
	return content;
}

function nav_handler(){
	button_icons = ["settings.png","data-mining.png"];
	content = "";   // "<div class=\"nav_icon\">"  "</div>"
	
	for(i = 0; i < button_icons.length; i++){
		content += "<img class=\"nav_icon\" src=\""+button_icons[i]+"\"alt=\"ICON\">";
	}
	return content;
}

function content_handler(){
	content = "";
	temp = "";
	
	
	// Change graph_tabs to objects or linked list with label and contents. 
	
	/*
	
	*/
	
	// Array of tabs on the page, used to generate unique id for each tab.
	graph_tabs = ["admin_panel", "add_tab", "add_tab", "blankdfad_dfja", "dnfanann"];
	
	// Need label check for unique names
	
	// For each label generate graph tab
	for(i = 0; i < graph_tabs.length; i++){
		content += add_panel(graph_tabs[i]);
	} // End for loop to generate content... Think about making a tab handler.
	
	return content;
}

function footer_handler(){
	content = "<center>Created By: Jared Gruka<br>Updated: Jan/1/2015 vA.1.0</center>";
	return content;
}

function admin_panel(){
	// =  "<div id=\"file_input\"><div id=\"drop_zone\">Drop files here</div><output id=\"list\"></output></div>";

  function handleFileSelect(evt) {
    evt.stopPropagation();
    evt.preventDefault();

    var files = evt.dataTransfer.files; // FileList object.

    // files is a FileList of File objects. List some properties.
    var output = [];
    for (var i = 0, f; f = files[i]; i++) {
      output.push('<li><strong>', escape(f.name), '</strong> (', f.type || 'n/a', ') - ',
                  f.size, ' bytes, last modified: ',
                  f.lastModifiedDate ? f.lastModifiedDate.toLocaleDateString() : 'n/a',
                  '</li>');
    }
    document.getElementById('list').innerHTML = '<ul>' + output.join('') + '</ul>';
  }

  function handleDragOver(evt) {
    evt.stopPropagation();
    evt.preventDefault();
    evt.dataTransfer.dropEffect = 'copy'; // Explicitly show this is a copy.
  }

  // Setup the dnd listeners.
  var dropZone = document.getElementById('drop_zone');
  dropZone.addEventListener('dragover', handleDragOver, false);
  dropZone.addEventListener('drop', handleFileSelect, false);
  
} // End Admin Panel REF:http://www.html5rocks.com/en/tutorials/file/dndfiles/

function add_panel(id){
	content = '';
	bockS = "<div class=\"graph_tab\" id=\""+id+"\">";
	bockE = "</div>";
	
	//width=\"400\" height=\"400\"
	example = '<canvas id=\"myChart\"></canvas>';
	
	
	if(id == 'add_tab'){ // Checks id if this is add_tab
		
		img = "add_tab.png"; // Image used for add tab
		content += bockS + "<img class=\"add_img\" onclick=\"add_tab()\" src=\"" +img+ "\" alt=\"Missing Image\">" + bockE;
		
	} else if(id == "admin_panel"){ // Checks id if this is admin panel
		
		content += bockS + "<div id=\"file_input\"><div id=\"drop_zone\">Drop files here</div><output id=\"list\"></output></div>" + bockE;
		//admin_panel();
		
	} else {
		content += bockS + content + example + bockE;
	}
	
	
	return content;
}

function add_tab(){
	
	for(;;){
		if(label == null)
		{
			var label = prompt("Please enter panel name", "blank_panel");
		} else {
			break;
		}
	}
	
	alert(label);
	return label;
}

function remove_panel(id){
	// Remove tab based of id as param
}

function parsedata(response) {

    var arr = JSON.parse(response);
    var i;
    var out = "<hr>";

    for(i = 0; i < arr.length; i++) {
        out += "<br>" + arr.employee[1];  
        "<br>";
    }
    out += "<hr>"
    document.getElementById("content").innerHTML = out;
}
