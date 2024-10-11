import Heading from "../ui/Heading";
import Row from "../ui/Row";
import { useEffect } from "react";
import { getCabins } from "../services/apiCabins.js";

function Cabins() {
  useEffect(() => {
    getCabins().then((data) => console.log(data));
  }, []);

  return (
    <Row type="horizontal">
      {/*<Heading as="h1">All cabins</Heading>*/}
      {/*<p>TEST</p>*/}
      <img
        src="https://xbrxzggohzbmkrrjhbfb.supabase.co/storage/v1/object/public/cabin-images/cabin-002.jpg?t=2024-10-11T15%3A17%3A18.775Z"
        alt="cabin"
      />
    </Row>
  );
}

export default Cabins;
