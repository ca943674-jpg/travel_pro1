import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function Travel_gallary1(props) {
  const { data } = props;
  return (
    <div>
      <img src={data.img} alt="" className="w-100 rounded shadow" />
    </div>
  );
}

export default Travel_gallary1;