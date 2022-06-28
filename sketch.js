//Módulos da Biblioteca Matter
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

//Variáveis do código
var engine, world, ground;
var canvas; 




//carregando imagens para uma variável
function preload() {
  


}


//Função que é executada quando o programa é iniciado
function setup() {
  canvas = createCanvas(1200, 600); //Dimensões da tela de nosso jogo
  engine = Engine.create(); //criando um mecanismo de Fisíca
  world = engine.world; //criando um mundo e adicionando o Mecanismo de Fisíca ao mundo
  
  var ground_options={
    isStatic:true
  }
  //Criando um body de ground e adicionandop ao mundo com Mecanismo de Fisíca
  ground = Bodies.rectangle(0, height - 1, width * 2, 1, ground_options);
  World.add(world, ground);

  
}


//Tudo dentro de draw é excutado o tempo todo como um loop
function draw() {
  background(189);//alterando cor no fundo
  Engine.update(engine);//Atualizando o mecanismo de Fisíca no function draw

  //Criando um rect para torre e inserindo imagem de torre ao rect 
  rect(ground.position.x, ground.position.y, width * 2, 1);
  


}


