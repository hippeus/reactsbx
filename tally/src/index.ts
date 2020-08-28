import { CsvFileReader } from "./CsvFileReader";
import { MatchReader } from "./MatchReader";
import { Summary } from "./Summary";

const reader = MatchReader.fromCSV("football.csv");
const summary = Summary.winsAnalysisWithConsoleReport("Man United");

reader.load();
summary.buildAndPrintReport(reader.matches);
