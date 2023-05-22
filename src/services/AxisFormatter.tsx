interface AxisFormatter {
    minDate: string;
    maxDate: string;
    minTickGap: number;
    formatFunction: (currentDate: string, index: number) => string;
}