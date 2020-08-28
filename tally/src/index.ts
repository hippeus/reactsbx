import { CsvFileReader } from "./CsvFileReader";
import { MatchReader } from "./MatchReader";
import { WinAnalysis } from "./Analyzers";
import { ConsoleReport, HTMLReport } from "./Printers";
import { Summary } from "./Summary";

const reader = new MatchReader(new CsvFileReader("football.csv"));
reader.load();

const analyzer = new WinAnalysis("Man United");
const report = new ConsoleReport();
// const report = new HTMLReport();

const summary = new Summary(analyzer, report);
summary.buildAndPrintReport(reader.matches);
