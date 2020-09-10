/* eslint-disable react/jsx-no-target-blank */
import React from 'react';
import './styles.css';
const DEVERLYN = require('./assets/IMAGENS/dev.jpg')
const EDUCACAO = require('./assets/IMAGENS/school.png');
const SKILLS = require('./assets/IMAGENS/code.png');
const WORK = require('./assets/IMAGENS/work.png');
const FACEBOOK = require('./assets/IMAGENS/facebook.png');
const LINKEDIN = require('./assets/IMAGENS/linkedin.png');
const TWITTER = require('./assets/IMAGENS/twitter.png');
const MAIL = require('./assets/IMAGENS/email.png');
const GITHUB = require('./assets/IMAGENS/github.png');

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
        <center><p className='star' style={{color: '#e658'}}>EDUCAÇÃO</p></center>
        <div id='coluna3'>
          <p className='desc'>ANÁLISE E DESENVOLVIMENTO DE SISTEMAS</p>
          <p className='workTitle' >2020 - 2022 | Universidade Cidade São Paulo</p>
        </div>
        <div id='coluna3'>
          <p className='desc'>TÉCNICO EM DESENVOLVIMENTO DE SISTEMAS</p>
          <p className='workTitle'>2018 - 2019 | Etec Praia Grande</p>
        </div>
        <div id='coluna3'>
          <p className='descM'>TÉCNICO EM INFORMÁTICA</p>
          <p className='workTitle'>2016 - 2017 | Etec Dra Ruth Cardoso</p><br/><br/>
        </div>
      </div>
      <div>
      <img className='icones' src={SKILLS} alt='Educação'/>
        <center><p className='star' style={{color: '#e658'}}>SKILLS</p></center>
        <div id='coluna'>
          <div id='coluna2'>
            <p className='normal'>HTML</p>
            <p className='normal'>CSS</p>
            <p className='normal'>React Js</p>
            <p className='normal'>React Native</p> 
            <p className='normal'>Java</p>
            <p className='normal'>JavaScript</p>
            <p className='normal'>SQL</p>
            <p className='normal'>Adobe Photoshop</p>
            <p className='normal'>Metodologia Ágil</p>
            <p className='normal'>UI/UX</p>                                    
          </div>
          <div id='coluna2'>
            <p className='stars'>★★★★★</p>
            <p className='stars'>★★★★★</p>
            <p className='stars'>★★★★☆</p>
            <p className='stars'>★★★★☆</p>
            <p className='stars'>★★★☆☆</p>
            <p className='stars'>★★★☆☆</p>
            <p className='stars'>★★★☆☆</p>
            <p className='stars'>★★★☆☆</p>
            <p className='stars'>★★★☆☆</p>
            <p className='stars'>★★★☆☆</p>            
          </div>
        </div>
        <div id='coluna'>
          <div id='coluna2'> 
            <p className='normal'>ESlint</p>
            <p className='normal'>Bootstrap</p>
            <p className='normal'>Node</p>
            <p className='normal'>Git</p>
            <p className='normal'>PHP</p>
            <p className='normal'>Vue Js</p>
            <p className='normal'>Angular Js</p>
            <p className='normal'>SASS</p> 
            <p className='normal'>LESS</p> 
            <p className='normal'>AWS</p>  
          </div>
          <div id='coluna2'>
            <p className='stars'>★★★☆☆</p>
            <p className='stars'>★★★☆☆</p>
            <p className='stars'>★★☆☆☆</p>
            <p className='stars'>★★☆☆☆</p>
            <p className='stars'>★★☆☆☆</p>
            <p className='stars'>★☆☆☆☆</p>
            <p className='stars'>★☆☆☆☆</p>
            <p className='stars'>★☆☆☆☆</p>
            <p className='stars'>★☆☆☆☆</p>
            <p className='stars'>★☆☆☆☆</p>
          </div>
        </div>
        <center>
          <fieldset className='Fieldset'>
              <legend className='descComents' style={{color: '#e658'}}>Descrição</legend>
              <div id='coluna'>
                <div id='coluna2'>
                  <p className='normal'>Avançado</p>
                  <p className='normal'>Alto</p>
                  <p className='normal'>Médio</p>
                  <p className='normal'>Baixo</p>
                  <p className='normal'>Estudando</p>
                </div>
                <div id='coluna2'>
                  <p className='star'>★★★★★</p>
                  <p className='star'>★★★★☆</p>
                  <p className='star'>★★★☆☆</p>
                  <p className='star'>★★☆☆☆</p>
                  <p className='star'>★☆☆☆☆</p>
                </div>
              </div>
          </fieldset><br/><br/>
        </center>
        <div className='atividades'>
          <div id='col1'>
            <div id='col1'>
              <center><p className='star' style={{color: '#e658'}}>EXPERIÊNCIA</p></center>
              <div id='col2'>
                <div id='col1'>
                  <img className='iconesMenores' src={WORK} alt='WORK'/>
                  <p id='workTitle'>Savoir Tecnologia</p>
                  <p className='normal'>Desenvolvedora Front-end</p>
                  <div id='col1'>
                    <p id='dot'>•</p>
                    <p className='descricao'>Desenvolvimento de sites e aplicativos</p>
                  </div>
                  <div id='col1'>
                    <p id='dot'>•</p>
                    <p className='descricao'>Modelagem de dados e programação SQL</p>
                  </div>
                  <div id='col1'>
                    <p id='dot'>•</p>
                    <p className='descricao'>Desenvolvimento de UI</p>
                  </div>
                  <div id='col1'>
                    <p id='dot'>•</p>
                    <p className='descricao'>Levantamento de requisitos</p>
                  </div>
                  <div id='col1'>
                    <p id='dot'>•</p>
                    <p className='descricao'>Teste e qualidade de software</p>
                  </div>
                </div>
              </div>
              <div id='col2'>
                <div id='col1'>
                  <img className='iconesMenores' src={WORK} alt='WORK'/>
                  <p id='workTitle'>CaseNet</p>
                  <p className='normal'>Técnico em Informática</p>
                  <div id='col1'>
                    <p id='dot'>•</p>
                    <p className='descricao'>Manutenção de computadores</p>
                  </div>
                  <div id='col1'>
                    <p id='dot'>•</p>
                    <p className='descricao'>Suporte ao cliente</p>
                  </div>
                  <div id='col1'>
                    <p id='dot'>•</p>
                    <p className='descricao'>Conhecimento em sistemas operacionais</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='trabalhos'>
          <center><p className='star' style={{color: '#e658'}}>TRABALHOS</p></center>
          <div id='col4'>
          <center><p className='desc'>TCC - QuickJob</p><br/>
          <p className='workTitle' >2017 | Membro da equipe que desenvolveu um aplicativo android, em react, para busca e divigulagão de trabalhos informais.</p></center>
          </div>
          <div id='col4'>
          <center><p className='desc'>TCC - MedLuz</p><br/>
          <p className='workTitle' >2019 | Membro da equipe que desenvolveu um aplicativo android, em java, para medir e controlar o consumo de energia de uma casa</p></center>
          </div>
          <div id='col4'>
          <center><p className='desc'>Aplicativo Android</p><br/>
          <p className='workTitle' >2020 | Desenvolvedora de um aplicativo android, em java, que identificava palavras preconceituosas digitadas pelo usário realizando a correção automática para palavras politicamente corretas </p></center>
          </div>
          <div id='col4'>
          <center><p className='desc'>Aplicativo Android</p><br/>
          <p className='workTitle' >2020 | Desenvolvedora de um aplicativo android, em react native, que manipulava a câmera do celular para leitura de  QR code </p></center>
          </div>
          <div id='col4'><br/>
          <center><p className='desc'>São Paulo Tech Week</p><br/>
          <p className='workTitle' >2019 |  Membro da equipe que desenvolveu uma plataforma de estudos para auxiliar o professor na educação de alunos com deficiência.</p></center>

          </div>
          <div id='col4'><br/>
          <center><p className='desc'>Space Apps Challenge</p><br/>
          <p className='workTitle' >2019 |  Membro da equipe que desenvolveu uma solução para transformar a cidade de santos em uma cidade sustentável.</p></center>

          </div>
          <div id='col4'><br/>
          <center><p className='desc'>A história da mulher na computação</p>
          <p className='workTitle' >2020 |  Atualmente no desenvolvimento de uma iniciação cientifica sobre a história da mulher na computação.</p></center>

          </div>
          <div id='col4'><br/>
          <center><p className='desc'>Aplicativo android</p><br/>
          <p className='workTitle' >2020 |  Atualmente no desenvolvimento de um aplicativo, em react native, que notifica os pais de bêbes sobre o que eles estão sentindo de acordo com seu choro.</p></center>

          </div>
        </div>
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
