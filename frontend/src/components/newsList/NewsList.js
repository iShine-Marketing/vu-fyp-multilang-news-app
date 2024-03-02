// components/NewsList.js
import NewsCard from "../newsCard/NewsCard";

export default function NewsList({ newsItems }) {
  return (
    <div className="flex flex-wrap justify-between">
      {newsItems.map((newsItem, index) => (
        <div key={index} className="p-4 md:w-1/4">
          <NewsCard title={newsItem.title} summary={newsItem.summary} imageUrl={newsItem.imageUrl} />
        </div>
      ))}
    </div>
  );
}