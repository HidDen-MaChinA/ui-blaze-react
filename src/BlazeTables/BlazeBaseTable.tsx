import blazeCentralConfiguration from "../blazeCentralConfiguration";
import type { ReactNode } from "react";


const TBody = blazeCentralConfiguration.blazeTables?.TBody
const THead = blazeCentralConfiguration.blazeTables?.Thead

export type BlazeBaseTablePropsType = {
  headers?: string[];
  children?: ReactNode
};


export function BlazeBaseTable(props: BlazeBaseTablePropsType) {
  const { headers, children } = props;
  return (
    <table>
      {THead ? (
        <THead>
          {headers?.map((header) => (
            <th>{header}</th>
          ))}
        </THead>
      ) : (
        <thead>
          {headers?.map((header) => (
            <th>{header}</th>
          ))}
        </thead>
      )}
      {TBody ? <TBody>{children}</TBody> : <tbody>{children}</tbody>}
    </table>
  );
}
