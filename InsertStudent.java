import java.sql.DriverManager;
import java.sql.Connection;
import java.sql.Statement;

public class InsertStudent{

  public static void main(String[] args){
  
    final String URL = "jdbc:mysql://localhost/sampledb";
    final String USER = "root";
    final String PASS = "pass";
    String sql = "INSERT INTO student VALUES(6,'小林',95)";
    
    Connection con = null;
    Statement stmt = null;

    try{
      //①DBに接続
      con = DriverManager.getConnection(URL, USER, PASS);
      //②ステートメントを生成
      stmt = con.createStatement();
      //③SQLを実行
      int count = stmt.executeUpdate(sql);      
      System.out.println( count + "件更新しました");
    } catch(Exception e){
      e.printStackTrace();
    } finally {
      try{
        //④リソースを解放
        if(stmt != null) stmt.close();
        if(con != null) con.close();
      } catch(Exception e){
        e.printStackTrace();
      }
    }
  }
}

