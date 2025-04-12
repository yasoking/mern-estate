import { useEffect } from "react";
import PropTypes from "prop-types";

const PageTitle = ({ title }) => {
  useEffect(() => {
    document.title = title || "Default Title"; // Fallback to "Default Title" if no title is provided
  }, [title]);

  return null; // This component doesn't render anything visually
};

// Add PropTypes validation
PageTitle.propTypes = {
  title: PropTypes.string.isRequired, // 'title' must be a string and is required
};

export default PageTitle;
