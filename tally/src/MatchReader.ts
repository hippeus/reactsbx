import { MatchResult } from "./MatchResult";
import { dateStringToDate } from "./utils";
import { MatchData } from "./MatchData";

export interface DataReader {
  data: string[][];
  read(): void;
}

export class MatchReader {
  matches: MatchData[] = [];

  constructor(public reader: DataReader) {}

  load(): void {
    this.reader.read();

    this.matches = this.reader.data.map(
      (row: string[]): MatchData => {
        return [
          dateStringToDate(row[0]),
          row[1],
          row[2],
          parseInt(row[3]),
          parseInt(row[4]),
          row[5] as MatchResult, // type assertion
          row[6],
        ];
      }
    );
  }
}
