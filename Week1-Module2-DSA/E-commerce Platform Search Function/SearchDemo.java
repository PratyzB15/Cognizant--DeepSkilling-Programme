import java.util.Arrays;
import java.util.Comparator;

public class SearchDemo {

    // Linear Search
    public static Product linearSearch(Product[] products, String key) {

        for (Product product : products) {

            if (product.productName.equalsIgnoreCase(key)) {
                return product;
            }

        }

        return null;
    }

    // Binary Search
    public static Product binarySearch(Product[] products, String key) {

        int low = 0;
        int high = products.length - 1;

        while (low <= high) {

            int mid = (low + high) / 2;

            int result = products[mid].productName.compareToIgnoreCase(key);

            if (result == 0) {
                return products[mid];
            }
            else if (result < 0) {
                low = mid + 1;
            }
            else {
                high = mid - 1;
            }

        }

        return null;
    }

    public static void main(String[] args) {

        // Array for Linear Search
        Product[] products = {

                new Product(101, "Laptop", "Electronics"),
                new Product(102, "Shoes", "Fashion"),
                new Product(103, "Mobile", "Electronics"),
                new Product(104, "Watch", "Accessories"),
                new Product(105, "Camera", "Electronics")

        };

        System.out.println("===== LINEAR SEARCH =====");

        Product linearResult = linearSearch(products, "Mobile");

        if (linearResult != null) {
            linearResult.display();
        }
        else {
            System.out.println("Product Not Found");
        }

        // Sorting array for Binary Search
        Arrays.sort(products, Comparator.comparing(p -> p.productName));

        System.out.println("\n===== BINARY SEARCH =====");

        Product binaryResult = binarySearch(products, "Mobile");

        if (binaryResult != null) {
            binaryResult.display();
        }
        else {
            System.out.println("Product Not Found");
        }

    }
}