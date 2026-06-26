class WordDocument implements Document {

    @Override
    public void open() {
        System.out.println("Word Document Created and Opened.");
    }
}

class PdfDocument implements Document {

    @Override
    public void open() {
        System.out.println("PDF Document Created and Opened.");
    }
}

class ExcelDocument implements Document {

    @Override
    public void open() {
        System.out.println("Excel Document Created and Opened.");
    }
}