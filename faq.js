// Toggle Sidebar by button | MOBILE
const sidebar = document.getElementById('sidebar')

function toggleSidebar(){
    sidebar.classList.toggle('show')
}

document.querySelectorAll('.faq-question').forEach(question => {
    question.addEventListener('click', () => {
      const answer = question.nextElementSibling;
  
      // Toggle the "active" class
      if (answer.classList.contains('active')) {
        answer.classList.remove('active');
      } else {
        // Close all other answers
        document.querySelectorAll('.faq-answer').forEach(ans => ans.classList.remove('active'));
        // Open the clicked one
        answer.classList.add('active');
      }
    });
  });