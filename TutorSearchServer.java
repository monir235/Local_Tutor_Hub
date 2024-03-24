import java.sql.*;
import java.util.ArrayList;
import java.util.List;

public class TutorSearchServer {
    public static void main(String[] args) {
        // Connect to MySQL database
        try (Connection connection = DriverManager.getConnection("jdbc:mysql://localhost:3307/group1", "root", "#sirajum@1234")) {
            System.out.println("Connected to MySQL database");

            // Execute SQL query to fetch tutor data
            String searchTerm = "ARPA DEY";
            String query = "SELECT * FROM tutor WHERE name LIKE '%" + searchTerm + "%'";
            try (Statement statement = connection.createStatement();
                 ResultSet resultSet = statement.executeQuery(query)) {

                List<Tutor> tutors = new ArrayList<>();
                // Process query results and store data in a list of Tutor objects
                while (resultSet.next()) {
                    Tutor tutor = new Tutor(
                            resultSet.getInt("tutor_id"),
                            resultSet.getString("name"),
                            resultSet.getString("email"),
                            resultSet.getString("availability"),
                            resultSet.getString("mobile_no"),
                            resultSet.getString("Location"),
                            resultSet.getString("institution"),
                            resultSet.getString("current_subject"),
                            resultSet.getInt("teaching_experience")
                    );
                    tutors.add(tutor);
                }

                // Expose data via an HTTP endpoint (not shown here)

                // Print the retrieved tutor data
                for (Tutor tutor : tutors) {
                    System.out.println(tutor);
                }
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }
}

class Tutor {
    private int tutorId;
    private String name;
    private String email;
    private String availability;
    private String mobileNo;
    private String location;
    private String institution;
    private String currentSubject;
    private int teachingExperience;

    public Tutor(int tutorId, String name, String email, String availability, String mobileNo, String location, String institution, String currentSubject, int teachingExperience) {
        this.tutorId = tutorId;
        this.name = name;
        this.email = email;
        this.availability = availability;
        this.mobileNo = mobileNo;
        this.location = location;
        this.institution = institution;
        this.currentSubject = currentSubject;
        this.teachingExperience = teachingExperience;
    }

    // Getters and setters (not shown here)

    @Override
    public String toString() {
        return "Tutor{" +
                "tutorId=" + tutorId +
                ", name='" + name + '\'' +
                ", email='" + email + '\'' +
                ", availability='" + availability + '\'' +
                ", mobileNo='" + mobileNo + '\'' +
                ", location='" + location + '\'' +
                ", institution='" + institution + '\'' +
                ", currentSubject='" + currentSubject + '\'' +
                ", teachingExperience=" + teachingExperience +
                '}';
    }
}
