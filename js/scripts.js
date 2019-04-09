function Place(name,  notes, timeofYear, landmarks=[], id){
  this.name = name,
  this.landmarks = landmarks,
  this.notes = notes;
  this.timeofYear = timeofYear;
  this.id = 0;
}

function refreshLocations(thebookinquestion){
  $("#locbook").html("");
  thebookinquestion.book.forEach(function(y){
    $("#locbook").append(y.printer());
  })
}

function LocationBook() {
  this.book = [],
  this.curId = 0
}

LocationBook.prototype.AddPlace = function(thisloc){
  console.log(thisloc);
  console.log(this.book);
  this.book[this.curId] = thisloc;
  thisloc.id = this.curId;
  this.curId++;
}
Place.prototype.printer = function(){
  var locPrint;
  locPrint = " <div class='entry location' style='border-radius:20px; position:relative;'>";
  locPrint+= "Name: <div class='container'>" + this.name + "</div>";
  locPrint+="Time of Year: <div>" + this.timeofYear + "</div>";
  locPrint+="Notes:<div>";
  this.landmarks.forEach(function(y){
    locPrint+= "<div class='note'>" + y + "</div>";
  });
  locPrint+="notes:";
  this.notes.forEach(function(y){
    locPrint+= "<div class='note'>" + y + "</div>";
  });
  locPrint+="</div>";
  return locPrint;
}

//var newBook;
//var newLoc;

$(document).ready(function() {
  var newBook = new LocationBook();
  var notes = [];
  var marks = [];
  var example = new Place();
  example.name = "Oregon";
  example.timeofYear = "October 21st";
  example.landmarks = ["Pioneer Square", "Klamath Falls I guess?"];
  example.notes = ["Rainy", "Lots of homeless people and meth heads, sometimes both at once."]
  example.id = 0;
    newBook.AddPlace(example);
    refreshLocations(newBook);
      console.log(newBook);
  $("#placesform").submit(function(event){
    event.preventDefault();
    console.log("asdfasdf");
    var newLoc = new Place($("#locname").val(),notes,$("#loctimeOfYear").val(),marks, newBook.curId);
    console.log("asdfasdf");
    console.log(newLoc);

    newBook.AddPlace(newLoc);
    refreshLocations(newBook);
  });
  $("#noteadd").submit(function(event){
    //$("#locnote").
    event.preventDefault();
    if($("#locnote").val() != "" )
    {
      notes.push($("#locnote").val());
    }
    console.log(notes);
    $("#locnotes").html("")
    notes.forEach(function(y){
      $("#locnotes").append("<div class='note'>" + y + "<br></div>");
    });

  });
  $("#Addlandmark").submit(function(event){
    //$("#locnote").
    event.preventDefault();
    if($("#landmark").val() != "" ){
      marks.push($("#landmark").val());
    }
    console.log(landmarks);
    $("#landmarks").html("");
    marks.forEach(function(y){
      $("#landmarks").append("<div class='note'>" + y + "<br></div>");
    });
  });
  console.log("shdfasjghasjklgh");
});
