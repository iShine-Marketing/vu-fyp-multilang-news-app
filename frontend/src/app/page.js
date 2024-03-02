import Image from "next/image";
import NewsList from "@/components/newsList/NewsList.js";

export default function Home() {

  const newsItems = [
    { title: "News Title 1", summary: "Summary of news 1", imageUrl: "https://arynews.tv/wp-content/uploads/2024/02/Untitled-1-297-300x148.jpg" },
    { title: "News Title 2", summary: "Summary of news 2", imageUrl: "https://arynews.tv/wp-content/uploads/2023/04/Israeli-Forces-Al-Aqsa-Mosque-696x342.jpg" },
    { title: "News Title 3", summary: "Summary of news 3", imageUrl: "https://arynews.tv/wp-content/uploads/2024/02/usamam-696x342.jpg" },
    { title: "News Title 4", summary: "Summary of news 4", imageUrl: "https://arynews.tv/wp-content/uploads/2024/02/Army-chief-696x342.jpg" },
    { title: "News Title 1", summary: "Summary of news 1", imageUrl: "https://arynews.tv/wp-content/uploads/2024/02/Untitled-1-290-696x342.jpg" },
    { title: "News Title 2", summary: "Summary of news 2", imageUrl: "https://arynews.tv/wp-content/uploads/2023/04/Israeli-Forces-Al-Aqsa-Mosque-696x342.jpg" },
    { title: "News Title 3", summary: "Summary of news 3", imageUrl: "https://arynews.tv/wp-content/uploads/2024/02/Balaj-696x342.jpg" },
    { title: "News Title 4", summary: "Summary of news 4", imageUrl: "https://arynews.tv/wp-content/uploads/2024/02/Army-chief-696x342.jpg" },
    { title: "News Title 1", summary: "Summary of news 1", imageUrl: "https://www.aljazeera.com/wp-content/uploads/2024/02/2023-01-13T163604Z_1673623517_RC2QPY9LC0R1_RTRMADP_3_ISRAEL-PALESTINIANS-1709060585.jpg?resize=375%2C250&quality=80" },
    { title: "News Title 2", summary: "Summary of news 2", imageUrl: "https://www.aljazeera.com/wp-content/uploads/2024/02/AFP__20240226__34KB3AM__v3__HighRes__TopshotPalestinianIsraelConflictFood-1709132765.jpg?resize=770%2C513&quality=80" },
    { title: "News Title 3", summary: "Summary of news 3", imageUrl: "https://www.aljazeera.com/wp-content/uploads/2023/10/2023-10-18T044035Z_1993086278_RC2SU3ACA055_RTRMADP_3_CHINA-RUSSIA-PUTIN-XI-1697605278.jpg?resize=375%2C250&quality=80" },
    { title: "News Title 4", summary: "Summary of news 4", imageUrl: "https://www.aljazeera.com/wp-content/uploads/2023/09/2023-09-13T070640Z_1013465857_RC2J73A0W7ZE_RTRMADP_3_RUSSIA-NORTHKOREA-PUTIN-KIM-1694591095.jpg?resize=375%2C250&quality=80" },
    // Add more news items as needed
  ];

  return (
    <div className="container mx-auto px-4">
      <NewsList newsItems={newsItems} />
    </div>

  );
}
