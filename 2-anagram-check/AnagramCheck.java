import java.util.Arrays;
import java.util.Scanner;

public class AnagramCheck {

  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);

    System.out.print("Enter first string: ");
    String str1 = sc.nextLine();

    System.out.print("Enter second string: ");
    String str2 = sc.nextLine();

    if (isAnagram(str1, str2)) {
      System.out.println("The strings are anagrams.");
    } else {
      System.out.println("The strings are not anagrams.");
    }
    sc.close();
  }

  static boolean isAnagram(String str1, String str2) {
    str1 = str1.trim().toLowerCase();
    str2 = str2.trim().toLowerCase();
    if (str1.length() != str2.length())
      return false;

    char[] a = str1.toCharArray();
    char[] b = str2.toCharArray();

    Arrays.sort(a);
    Arrays.sort(b);
    return Arrays.equals(a, b);
  }
}