import { MatchData } from "./MatchData";
import { WinAnalysis } from "./Analyzers";
import { ConsoleReport, HTMLReport } from "./Printers";

interface Analyzer {
  run(matches: MatchData[]): string;
}

interface Printer {
  print(report: string): void;
}

export class Summary {
  static winsAnalysisWithConsoleReport(team: string): Summary {
    return new Summary(new WinAnalysis(team), new ConsoleReport());
  }
  static winsAnalysisWithHTMLReport(team: string): Summary {
    return new Summary(new WinAnalysis(team), new HTMLReport());
  }

  constructor(public analyzer: Analyzer, public printer: Printer) {}

  buildAndPrintReport(data: MatchData[]): void {
    const analysis = this.analyzer.run(data);
    this.printer.print(analysis);
  }
}
