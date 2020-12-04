import { formatter } from "../utilities/formatNumber";

export const Value = (prov) => {
  if (prov.length !== 0) {
    let a = 0;
    return prov.map((provinsi) => (
      <tr key={provinsi.fid}>
        <td>{++a}</td>
        <td>{provinsi.provinsi}</td>
        <td>{formatter.format(provinsi.kasusPosi)}</td>
        <td>{formatter.format(provinsi.kasusSemb)}</td>
        <td>{formatter.format(provinsi.kasusMeni)}</td>
      </tr>
    ));
  } else {
    
  }
};
