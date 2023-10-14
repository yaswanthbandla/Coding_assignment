import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Scanner;
import java.util.Arrays;

public class ShuffleArray {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Enter the number of elements: ");
        int n = scanner.nextInt();
        
        Integer[] array = new Integer[n];
        System.out.println("Enter " + n + " integers:");
        
        for (int i = 0; i < n; i++) {
            array[i] = scanner.nextInt();
        }
        
        List<Integer> list = new ArrayList<>(Arrays.asList(array));
        Collections.shuffle(list);

        System.out.println("Shuffled array: " + list);
        
        scanner.close();
    }
}
