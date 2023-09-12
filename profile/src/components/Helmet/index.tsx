import { Helmet } from "react-helmet-async";

export default function helmet() {
  return (
    <Helmet>
      <title>Cleiton Barros | Frontend Engineer</title>
      <meta name="language" content="pt-br" />
      <link rel="icon" type="image/svg+xml" href="./logo.png" />
      <meta
        name="description"
        content="Cleiton Elias de Barros Moura é um desenvolvedor web front-end e UI/UX Designer, apaixonado pela língua francesa e amante da cultura asiática. Especializado na criação de landing pages tem como missão criar site, aplicativos e layouts bonito e que deixe as pessoas ETONNÉS."
      />
      <meta
        name="keywords"
        content="Cleiton Elias de Barros Moura, Eli, Cleiton Elias, Cleiton, Elias , Cleiton Barros, Desenvolvedor, Front-end, Frontend Engineer , Desenvolvedor Frontend"
      />
      <meta name="robots" content="index, follow" />
      <meta property="og:type" content="website" />
      <meta
        property="og:url"
        content="https://cleitonfrontendengineer.vercel.app/|"
      />
      <meta property="og:title" content="Cleiton Elias de Barros Moura" />
      <meta
        property="og:description"
        content="Cleiton Elias de Barros Moura é um desenvolvedor web front-end e UI/UX Designer, apaixonado pela língua francesa e amante da cultura asiática. Especializado na criação de landing pages tem como missão criar site, aplicativos e layouts bonito e que deixe as pessoas ETONNÉS."
      />
      <meta property="og:image" content="./logo.png" />
      <meta property="twitter:card" content="summary_large_image" />
      <meta
        property="twitter:url"
        content="https://cleitonfrontendengineer.vercel.app/"
      />
      <meta property="twitter:title" content="Cleiton Elias de Barros Moura" />
      <meta
        property="twitter:description"
        content="Cleiton Elias de Barros Moura é um desenvolvedor web front-end e UI/UX Designer, apaixonado pela língua francesa e amante da cultura asiática. Especializado na criação de landing pages tem como missão criar site, aplicativos e layouts bonito e que deixe as pessoas ETONNÉS."
      />
      <meta property="twitter:image" content="./logo.png" />
    </Helmet>
  );
}
