import { Value } from "../utilities/provValue";
import Table from "react-bootstrap/Table";
import styled from "styled-components";

const TableStyles = styled.div`
  .thead {
    background: #141414;
    color: #fff;
  }
`;

const ProvinceTable = ({ prov }) => {
  return (
    <TableStyles>
      <Table striped bordered hover variant="light">
        <thead className="thead">
          <tr>
            <th>No.</th>
            <th>Province</th>
            <th>Confirmed</th>
            <th>Recovered</th>
            <th>Deaths</th>
          </tr>
        </thead>
        <tbody>{Value(prov)}</tbody>
      </Table>
    </TableStyles>
  );
};

export default ProvinceTable;
