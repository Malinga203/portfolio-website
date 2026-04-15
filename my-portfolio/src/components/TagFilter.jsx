import { Button } from "react-bootstrap";

export default function TagFilter({ tags, activeTag, setActiveTag }) {
  return (
    <div className="filter-tag-wrap">
      <Button
        variant={activeTag === "All" ? "light" : "outline-light"}
        className="filter-tag-btn"
        onClick={() => setActiveTag("All")}
      >
        All
      </Button>

      {tags.map((tag) => (
        <Button
          key={tag}
          variant={activeTag === tag ? "light" : "outline-light"}
          className="filter-tag-btn"
          onClick={() => setActiveTag(tag)}
        >
          {tag}
        </Button>
      ))}
    </div>
  );
}