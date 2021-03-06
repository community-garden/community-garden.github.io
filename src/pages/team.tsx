import React from 'react';
import { Card, Image } from 'semantic-ui-react';

const Team = () => {

  const team = [
    {
      name: "Claudia",
      avatar: "https://raw.githubusercontent.com/wiki/community-garden/community-garden.github.io/images/team_avatar_claudia.png",
      about_de: "Claudia, Lebenskünstlerin, die viel studiert hat, nun aber lieber selbst das Werkzeug in die Hand nimmt. Stiftet andere Menschen gern zu Großprojekten - so wie PERGOLA - an und liebt es die Gartenernte in Gemeinschaft zuzubereiten und zu essen. ",
      about_en: "Claudia, life artist, who has studied a lot, but now prefers to take the tools into her own hands. Likes to instigate other people on large projects - like PERGOLA - and loves to prepare and eat the garden harvest in community."
    },
    {
      name: "Sebastian",
      avatar: "https://raw.githubusercontent.com/wiki/community-garden/community-garden.github.io/images/team_avatar_sebastian.png",
      about_de: "Sebastian, leidenschaftlicher Open-Source Entwickler. Wühlt nicht nur gern im Code anderer Leute sonder auch in der Erde und das am liebsten mit anderen Gärtner*innen gemeinsam. Programmieren ist für ihn wie das Spielen mit Bausteinen, da er bei der Entwicklung neuer Projekte gerne mit neuen Technologien und Bibliotheken experimentiert.",
      about_en: "Sebastian, passionate open-source developer. Not only does he digg in the code of other people, but also loves digging in the earth, best together with fellow gardeners. Programming for him equals playing with building blocks, because he has fun experimenting with new technologies, frameworks and libraries."
    },
    {
      name: "Stephanie",
      avatar: "https://raw.githubusercontent.com/wiki/community-garden/community-garden.github.io/images/team_avatar_stephanie.png",
      about_de: "Stephanie, UX-Designerin und Naturliebhaberin, die zwar mit Gärtnern selbst gar nicht so viel anfangen kann, aber es liebt, Probleme anderer zu lösen. Möchte helfen, PERGOLA zu etwas zu machen, was die Gärtner*innen wirklich brauchen.",
      about_en: "Stephanie, UX designer and nature lover, actually doesn't like gardening that much, but loves to solve other people's problems. Wants to help PERGOLA becoming an application that community gardeners really need."
    },
    {
      name: "Philipp",
      avatar: "https://raw.githubusercontent.com/wiki/community-garden/community-garden.github.io/images/team_avatar_philipp.png",
      about_de: "Philipp, Software-Entwickler, bringt nach Feierabend gerne Dreck aus dem Garten nach Hause, seltener auch Blumen und Gemüse. Will gemeinsam gegen Trockenheit ankämpfen und Pergola mit allerlei nützlichen Funktionen bewachsen lassen. Mag außerdem Vögel.",
      about_en: "Philipp, software developer, likes to bring home dirt from the community garden after work, rarely also flowers and vegetables. Wants to fight together against dryness and let pergola grow with all kinds of useful functions. Also likes birds."
    },
    {
      name: "Joe",
      avatar: "https://raw.githubusercontent.com/wiki/community-garden/community-garden.github.io/images/team_avatar_joe.png",
      about_de: "Joe, Entwicker und Enthusiast von Free and Open Source Software. Hackt meist im Keller des lokalen CCC, bei schönem Wetter auch mal im Internationalen Garten.",
      about_en: "Joe, developer, free and open-source software enthusiast. Most of the time hacking at the local hackerspace, in case of nice weather sometimes at the International Garden."
    },
  ]

  return (
    <Card.Group>
      {
        team.map(({name, avatar, about_de}) => (
          <Card>
            <Image src={avatar} wrapped ui={false}/>
            <Card.Content>
              <Card.Header>{name}</Card.Header>
              <Card.Description>{about_de}</Card.Description>
            </Card.Content>
          </Card>
        ))
      }
    </Card.Group>
  );
};

export default Team;
