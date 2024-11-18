function Projects() {
  return (
    <div className="m-2 justify-center flex flex-col w-[242px] bg-[#373A40] rounded-xl p-4 gap-y-1">
      <div className="font-medium">&lt;projects&gt;</div>
      <a href="https://github.com/qwegod/pizzashop" className="ml-5">
        Pizza Shop
      </a>
      <a
        href="https://github.com/qwegod/Word-Meaning-Lookup-App"
        className="ml-5"
      >
        Word Meaning Lookup
      </a>
      <a href="https://github.com/qwegod/quiz-app" className="ml-5">
        Quiz App
      </a>
      <a href="https://github.com/qwegod/pixel-render" className="ml-5">
        Pixel Render
      </a>
      <div className="font-medium">&lt;/projects&gt;</div>
    </div>
  );
}

export default Projects;
