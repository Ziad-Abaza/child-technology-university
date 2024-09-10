new Vue({
  el: "#app",
  data: {
    userId: "",
    student: null,
    students: [],
    falseId: false,
  },
  mounted() {
    fetch("data.json")
      .then((response) => response.json())
      .then((data) => {
        this.students = data;
      });
    
    window.addEventListener("load", () => {
      document.getElementById("loader").style.display = "none";
      document.getElementById("app").style.display = "block";
    });

  },
  methods: {
    login() {
      this.student = this.students.find((s) => s.id === this.userId);
      if (!this.student) {
        this.falseId = true;
      } else {
        this.falseId = false;
      }
    },
  },
});
