import PresentationPage from "./components/PresentationPage.jsx";


export default function App() {
  return (
    <LanguageProvider>
      {/* фиксируем ширину и убираем горизонтальный оверфлоу */}
      <div className="w-screen h-screen overflow-x-clip">
        <PresentationPage />
      </div>
    </LanguageProvider>
  );
}
