using System;
public class Program
{
	public static void Main()
	{
		Console.Write("Enter number of elements: ");
		int n=Convert.ToInt32(Console.ReadLine());
		
		int[] arr=new int[n];
		int[] oarray=new int[n];
		for(int i=0;i<n;i++)
		{
			arr[i]=Convert.ToInt32(Console.ReadLine());
			if(i%2==0)
				arr[i]+=1;
			else
				arr[i]-=1;
		}
		Console.Write("Output: ");
		for(int i=0;i<n;i++)
		{
			Console.Write(arr[i]);
			Console.Write(" ");
		}
		
	}
}