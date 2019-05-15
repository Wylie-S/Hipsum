//the array of paragraphs or the api calling data in will go here
import React, {Component} from 'react';
import _ from 'lodash';
import './GeneratedText.css';

class GeneratedText extends Component {
  constructor(props) {
    super(props);
    const GeneratedText = [
      'Lemme get one…on rib. I sure am hungry.',
      'His Momma named him Clay, I’m gonna call him Clay',
      'Girl, you look so good, someone ought to put you on a plate and sop you up with a biscuit.',
      'Make the money, dont let it make you.',
      'All my life I had to fight. I had to fight my daddy. I had to fight my uncles. I had to fight my brothers. A girl child aint safe in a family of men, but I aint never thought Id have to fight in my own house! I loves Harpo, God knows I do. But Ill kill him dead fo I let him beat me',
      'Yo Bird! Big Mama said to bring yo  black ass out there!',
      'This is not a damn democracy! We are in a state of emergency and my word is law! Theres only one boss around here, and thats me. The HNIC.',
      'The worst thing is that he made me move out here where my children are in school with only one other black kid so they wont be improperly influenced. Well, guess what John, Youre the motherfuckin improper influence! Get your shit! Get your shit! And get out!',
      'Oh, so you wanna box, is that what it is? You want some of this? You know what? There aint nothin to it, but to do it. You know what Im sayin, all we gotta do is push this to the side and there aint nothing but space and opportunity here. You know what Im sayin? Do you want some of this?',
      'Oh! Now youre gonna shoot me in my pinky toe ?',
      'Im not playing with you. I will blow that little black, gnarled crusty, dead motherfucker the fuck off your foot! Now put the razor away!',
      'My food is created to nourish the soul, okay? I havent used pork since Thelma was on Good Times about to marry Ibe, the African prince.',
      'You wanna smell my punani?',
      'In collusion? Let me tell you something! I am here at 8:20 sharp every morning and I work my ass off until quitting time. Yesterday, I counted $240,000 by hand for you! Thats how you should know! I mean, come on! This is just not right! I nearly got blown away in your tight-ass f**king bank, and youre going to fire me?',
      'Youre incapable of running this city. Sit your five-dollar ass down before I make change',
      ' Ah, Harper Stewart. Richard Wrong. Langston Snooze',
      'We didnt land on Plymouth rock! Plymouth rock landed on us. Youve been hoodwinked, bamboozled, run amuck and led astray!',
      'Youre incapable of running this city. Sit your five-dollar ass down before I make change',
      'I dont understand how can woman that fine have Hammer-Time on her feet!',
      'In life, there are times to be quiet, to shut the fuck up. This is one of those times.',
      '"Hey, baby, I noticed you noticing me, and I just wanted to put you on notice that I noticed you, too."',
      '"How come we overcame and nobody told me?',
      'His bike got stolen. I told him not to let anybody ride it. So I smacked him into next week. Hell be back on Tuesday.',
      'You pseudo-intellectual male with a pseudo-African name spouting pseudo-philosophy about a whole bunch of nothing! In fact, the only thing about you thats real are your green eyes. My brother!"',
      'Look, youre gonna have a hard time finding ‘the one.Youre a snob from the projects! Believe me, thats rare.',
      'Man, I should have known better than to ask the accounting firm of poor, broke and hungry for money',
      'I shoulda been born an octopus. You need eight hands to run this house',
      'Look at you with your stupid do-rag and your clown suit. Lookin like a Chicago two-step champion',
      'If you dont get it together and drop these macho attitudes, you are never going to have anybody bringing you anything, anywhere, any place, any time, ever. Now, what would you like in your coffee?',
      'Bye, Felisha.',
      'The secret is, you got to coordinate',
      'Is your name Yimmy Ya? Oh hell, nah. It’s got to be Oshun',
      'Let me tell you something. This here. Right Now. At this very moment is all that matters to me. I love you and it’s urgent like a motherfucker.',
      '“I ain’t stupid you stupid, stupid!',
      'See Daddy, sinners got soul too',
      'She’s a hoe because she’s sending her coochie through the mai',
      'There’s this psychiatrist, a lady named Frances Chris Walson. She has a theory about the black man in America. She says because of the system of racism in this country, the black man is meant to think of himself as a baby. A not yet fully formed being, who has not yet realized his full potential. To support her claim, she offers the following: First off, what does a black man call his woman? Mama. Secondly, what does a black man call his closest      acquaintances? His boys. And finally, what does a black man call his place of residence? The crib.',
      'What are we celebrating? My DIVOORRCEEE!',
      'Look at this shit! These are Ferragamos, n*gga! Ferragamos. They cost 300 dollars!',
      'What’s the f*cking procedure when you got a gun to your head?',
      'KNOWLEDGE BORN, WHAT’S THE SCIENCE BABY?',
      'PINO, FUCK YOU, FUCK YOUR FUCKIN’ PIZZA, AND FUCK FRANK SINATRA',
      'I would love ‘Awkward Black Girl’ to be on television, with the right team of people who understand and get it. If ‘Awkward Black Girl’ could make it to HBO starring a dark-skinned black girl, that would be revolutionary.',
      'Stop trying so hard to be someone youre not.',
      'Once you’re coming up with ways that you cant do something, youre not gonna do it.',
      'I will stick to finding the funny in the ordinary because my life is pretty ordinary and so are the lives of my friends – and my friends are hilarious.',
      'I’m rooting for everybody black!',
      'What do you know about love? What could you possibly know about love You know, I’m sick and tired of men using love as if it’s some disease you just catch. Love should have brought your ass home last night.',
      'Ah, I shoulda known you was at this Party, and ya know, with all that Jheri Curl juice you got in your hair, you better not Ever do a crime! The police wont have any problem finding you! "Follow the drip, follow the drip!',
      'Oh, f**k the family! I let the family into my house, and you know what happened? The family f**ked my husband',
      ' I hate you, Jody',
      'So whats the difference between rap and hip-hop? Its simple. Its like sayin you love somebody and bein in love with somebody. Rap is only a word.',
      'You know what? Last time you said that, I was kinda trippin, right? But now, youre right. I am crazy. And you know what else? I dont give a f**k. I dont give a f**k about you. I dont give a f**k about Steel. I dont give a F**K about Raheem, either. I dont give a f**k about myself.',
      'every time I come in the kitchen, you in the kitchen',
      'every time we get high, you start looking like sugar bear',
      'look at them two freaks gettin busy on the dance floor',
      'THIS **** SCARED',
      'love should of brought yo ass home last night',
      'what is this velvet',
      'you dont have dreams, you have moviesss!',
      'Hey, you old drunk, what did I tell you about drinking in front of my stoop? Move on; you’re blocking my view. You are ugly enough; don’t stare at me. The evil eye doesn’t work on me.',
      'I think it pisses God off if you walk by the color purple in a field and don’t notice it.',
      'And then reading became a developed form where it became shade. Shade is…I don’t tell you you’re ugly, but…I don’t have to tell you because you KNOW you’re ugly. And that’s shade.'

    ];
    this.state = {
      paragraphs: GeneratedText
    };

  }

  generateGraphs() {

    this.state.paragraphs = _.shuffle(this.state.paragraphs);
    const paragraphs = [];

    for (let i = 0; i < this.props.count; i++) {
      paragraphs.push(<div key={i} className="GeneratedText__paragraph">{this.state.paragraphs[i]}</div>)
    }

    return (<div>
      {paragraphs}
    </div>);
  }

  render() {
    return (<div className="GeneratedText">
      <h2 className="GeneratedTextHeading"></h2>
      <div className="GeneratedText__paragraphs-container">

        {this.generateGraphs()}
      </div>
    </div>);
  }
}

export default GeneratedText;
