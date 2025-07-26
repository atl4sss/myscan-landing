import PresentationPage from "./components/PresentationPage.jsx";
import LanguageProvider from "./i18n/LanguageProvider"; // если используешь RU/EN

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
