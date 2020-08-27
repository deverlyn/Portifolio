import React from 'react';
import './styles.css';
const DEVERLYN = require('./assets/IMAGENS/dev.jpg')
const EDUCACAO = require('./assets/IMAGENS/school.png');
const SKILLS = require('./assets/IMAGENS/code.png');
const WORK = require('./assets/IMAGENS/work.png');
const CONTATO = require('./assets/IMAGENS/phone.png');
const FACEBOOK = require('./assets/IMAGENS/facebook.png');
const LINKEDIN = require('./assets/IMAGENS/linkedin.png');
const TWITTER = require('./assets/IMAGENS/twitter.png');
const MAIL = require('./assets/IMAGENS/email.png');
const GITHUB = require('./assets/IMAGENS/github.png');
const STARFULL = require('./assets/IMAGENS/starFull.png');
const STAR = require('./assets/IMAGENS/starEmpty.png');

function App() {
  return (
    <div>
      <div id='container'>
        <div id='header'>
          <h1 className='ChickenPie'>DEVERLYN CHRISTINE</h1>
          <p className='desc'>Desenvolvedora Front-end</p>
        </div>
        <img id='dev' src={DEVERLYN} alt='Deverlyn Christine'/>
        <center><p className='color'> Desenvolvedora de softwares, aplicativos mobile e web, estudante de análise e desenvolvimento de sistemas e técnica em informática.</p></center>
      </div>
      <div>
        <img className='icones' src={EDUCACAO} alt='Educação'/>
        <div id='coluna3'>
          <p className='desc'>TÉCNICO EM DESENVOLVIMENTO DE SISTEMAS</p>
          <p className='normal'>2018 - 2019 | Etec Praia Grande</p>
        </div>
        <div id='coluna3'>
          <p className='desc'>TÉCNICO EM INFORMÁTICA</p>
          <p className='normal'>2016 - 2017 | Etec Dra Ruth Cardoso</p>
        </div>
        <div id='coluna3'>
          <p className='desc'>INGLÊS</p>
          <p className='normal'>2017 - 2019 | Evolute Cursos Profissionalizantes</p>
        </div>
      </div>
      <div>
        <center><p className='star'>SKILLS</p></center>
        <div id='coluna'>
          <div id='coluna2'>
            <p className='normal'>HTML</p>
            <p className='normal'>CSS</p>
            <p className='normal'>React Js</p>
            <p className='normal'>React Native</p>
            <p className='normal'>Vue Js</p>
            <p className='normal'>Angular Js</p>
            <p className='normal'>Git</p>          
          </div>
          <div id='coluna2'>
            <p className='star'>★★★★★</p>
            <p className='star'>★★★★★</p>
            <p className='star'>★★★☆☆</p>
            <p className='star'>★★★☆☆</p>
            <p className='star'>★★☆☆☆</p>
            <p className='star'>★★☆☆☆</p>
            <p className='star'>★★★☆☆</p>
          </div>
        </div>
        <div id='coluna'>
          <div id='coluna2'>
            <p className='normal'>Java</p>
            <p className='normal'>JavaScript</p>
            <p className='normal'>SQL</p>
            <p className='normal'>Adobe Photoshop</p>
            <p className='normal'>Metodologia Ágil</p>
            <p className='normal'>Prototipação de UI</p>
            <p className='normal'>Lógica de prgramação</p>
          </div>
          <div id='coluna2'>
            <p className='star'>★★☆☆☆</p>
            <p className='star'>★★★☆☆</p>
            <p className='star'>★★★☆☆</p>
            <p className='star'>★★★☆☆</p>
            <p className='star'>★★★★☆</p>
            <p className='star'>★★★★☆</p>
            <p className='star'>★★★★★</p>
          </div>
        </div>
        <center>
          <fieldset className='Fieldset'>
              <legend className='descComents'>Descrição</legend>
              <div id='coluna'>
                <div id='coluna2'>
                  <p className='normal'>Avançado</p>
                  <p className='normal'>Alto</p>
                  <p className='normal'>Médio</p>
                  <p className='normal'>Baixo</p>
                  <p className='normal'>Hello Word e olhe lá</p>
                </div>
                <div id='coluna2'>
                  <p className='star'>★★★★★</p>
                  <p className='star'>★★★★☆</p>
                  <p className='star'>★★★☆☆</p>
                  <p className='star'>★★☆☆☆</p>
                  <p className='star'>★☆☆☆☆</p>
                </div>
              </div>
          </fieldset>
        </center>
      </div>
      <div id='container'>
        <div id='footer'>
          <center><p className='normal'>Desenvolvido por Deverlyn Christine</p>
          Icons made by <a href="https://www.flaticon.com/authors/pixel-perfect" title="Pixel perfect">Pixel perfect</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a></center>
          <div id='foot'>
            <div id='coluna5'>
              <a href='https://www.facebook.com/deverlyn.christine' target="_blank"><img className='icon' src={FACEBOOK} alt='https://www.facebook.com/deverlyn.christine'/></a>
            </div>
            <div id='coluna5'>
              <a href='https://www.linkedin.com/in/deverlyn-christine-062357162/' target="_blank"><img className='icon' src={LINKEDIN} alt='Deverlyn Christine'/></a>
            </div>
            <div id='coluna5'>
              <a href='https://twitter.com/DeverlynChrist1' target="_blank"><img className='icon' src={TWITTER} alt='Deverlyn Christine'/></a>
            </div>
            <div id='coluna5'>
              <a href='https://github.com/deverlyn' target="_blank"><img className='icon' src={GITHUB} alt='Deverlyn Christine'/></a>
            </div>
            <div id='coluna5'>
              <address><a href="mailto:deverlyn.cgoncalves@gmail.com"><img className='icon' src={MAIL} alt='Deverlyn Christine'/></a></address>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
