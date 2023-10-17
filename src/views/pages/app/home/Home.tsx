import { CardPrincipal } from "@components/cards/CardPrincipal";

export const Home = () => {
  return (
    <div className="mt-4 grid-cardsPresentation">
      <CardPrincipal
        description="Hola"
        title="Exámenes"
        tag={{ color: "#fa2213", name: "Education" }}
        footer="Este es el footer"
        link="/exams"
      />
    </div>
  );
};
