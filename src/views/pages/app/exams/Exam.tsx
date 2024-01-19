export const Exam = () => {
  return (
    <div className="relative">
      <div className="pt-12 text-center max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold">Crea un examen</h1>
        <p className="text-sm">
          Para poder crear un examen, primero selecciona una fuente de
          información
        </p>
      </div>
      {/* {appState == "loading" && <Load />}
      {appState == "loaded" && sources && (
        <div className="container mx-auto grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
          {sources.map((source: InformationSource) => (
            <CardExam
              key={source.id}
              id={source.id}
              title={source.title}
              subject={source.subject}
              description={source.description}
              edition={source.edition}
              author={source.author}
              image={source.image}
            />
          ))}
          <Link
            to={"/exams/add"}
            className="h-full w-full border-2 border-dashed border-gray-400 hover:border-principal text-gray-400 hover:text-principal duration-200 rounded-md flex items-center justify-center"
          >
            <p className="text-3xl font-semibold">+</p>
          </Link>
        </div>
      )} */}
    </div>
  );
};
