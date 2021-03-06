const TechItem = ({ tech }) => {
  const { firstName, lastName } = tech;

  return (
    <li className="collection-item">
      <div>
        {firstName} {lastName}
        <a href="#!" className="secondary-content">
          <i className="material-icons grey-text" />
        </a>
      </div>
    </li>
  );
};

export default TechItem;
