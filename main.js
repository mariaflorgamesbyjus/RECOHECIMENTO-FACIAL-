
  // https://teachablemachine.withgoogle.com/models/KOSJOofja/ //

  Webcam.set({
    width: 320,
    height: 240,
    image_format: 'jpeg',
    jpeg_quality: 90
 });
 Webcam.attach( '#camera' );
 classifier = ml5.imageClassifier( 'https://teachablemachine.withgoogle.com/models/KOSJOofja/model.json',modelLoaded);

 function modelLoaded() {
   console.log('Model Loaded!');
 }
 function takeSnapshot()
{

  Webcam.snap( function(data_uri) {
    // display results in page
    document.getElementById('result').innerHTML = 
     '<img id="fotinhamaneirinha" src="'+data_uri+'"/>';
} );
}
function check(){

  foto = document.getElementById('fotinhamaneirinha')
classifier.classify(foto,result)

}

function result(resultado){

  document.getElementById("resultObjectName").innerHTML=resultado[0].label
  document.getElementById("resultObjectAccuracy").innerHTML=resultado[0].confidence
} 


 