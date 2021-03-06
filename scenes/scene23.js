/* globals Scene */
/* exported scene0 */

var scene23 = function(){
  var scene = new Scene('scene23', 'All');
  scene.createActor('home.png', 10, 10).navigatesOnTouch('scene0');

  scene.handheldPerspective(1, 0.5);

  scene.write(20, 110, "Layers (in development)", "title");
  scene.write(20, 145, "On handhelds you can change the perspective by tilting the device.", "");

  var actor1 = scene.createActor('actors/actor1.png', 250, 230);
  actor1.isInLayer(3);

  var actor2 = scene.createActor('actors/actor2.png', 100, 300);
  actor2.isInLayer(2);

  var actor3 = scene.createActor('actors/actor3.png', 400, 300);
  actor3.isInLayer(2);

  var actor4 = scene.createActor('actors/actor4.png', 250, 370);
  actor4.isInLayer(1);

  return scene;
};