const total = 8;
const showing = 8;
document.getElementById("showInfo").innerText =
  `Showing ${showing} of ${total} Products`;

//checkboxes
const selectAll = document.getElementById("selectAll");
const checkboxes = document.querySelectorAll(".rowCheck");

selectAll.addEventListener("change", function () {
  checkboxes.forEach((cb) => (cb.checked = this.checked));
});

//update select all
checkboxes.forEach((cb) => {
  cb.addEventListener("change", () => {
    const allChecked = [...checkboxes].every((c) => c.checked);
    selectAll.checked = allChecked;
  });
});

document.addEventListener("DOMContentLoaded", () => {
  console.log("System Initialized...");

  // Handles real-time search for both Products and Orders pages
  const searchInput = document.getElementById("searchInput");
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      const searchTerm = e.target.value.trim();
      console.log(`User is searching for: "${searchTerm}"`);
    });
  }

  // --- 2. Basic Filters (Dropdowns) ---
  // Captures changes in Category, Payment, and Status dropdowns
  const basicFilters = document.querySelectorAll(".form-select");
  basicFilters.forEach((filter) => {
    filter.addEventListener("change", (e) => {
      console.log(`Filter changed to: ${e.target.value}`);
    });
  });

  // --- 3. More Filters - Advanced Filtering Logic ---
  const applyAdvancedBtn = document.querySelectorAll(
    ".dropdown-menu .btn-warning, .dropdown-menu .btn-primary",
  );
  applyAdvancedBtn.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();

      const parentMenu = btn.closest(".dropdown-menu");
      const minValue = parentMenu.querySelector(
        'input[placeholder="Min"]',
      )?.value;
      const maxValue = parentMenu.querySelector(
        'input[placeholder="Max"]',
      )?.value;

      console.log("Advanced Filter Applied:");
      console.log("- Min Value:", minValue || "Not set");
      console.log("- Max Value:", maxValue || "Not set");

      alert(
        `Filters Applied: Range from ${minValue || 0} to ${maxValue || "Max"}`,
      );
    });
  });

  // --- 4. Export Action ---
  const exportButtons = document.querySelectorAll(
    ".btn-light.border, .btn-outline-secondary",
  );
  exportButtons.forEach((btn) => {
    if (btn.innerText.includes("Export")) {
      btn.addEventListener("click", () => {
        console.log("Export action triggered...");
        alert("Preparing your file for download (Excel/CSV)...");
      });
    }
  });

  // --- 5. Add Entry Action (Product/Order) ---
  const addEntryBtn = document.querySelector(".btn-warning, .btn-primary");
  if (addEntryBtn && addEntryBtn.innerText.includes("Add")) {
    addEntryBtn.addEventListener("click", () => {
      console.log("Add Action Clicked!");
      alert("Opening Entry Form (Modal)...");
    });
  }

  // --- 6. Reset Filters ---
  const resetBtn = document.querySelector('button[type="reset"]');
  if (resetBtn) {
    resetBtn.addEventListener("click", () => {
      console.log("All filters have been reset.");
    });
  }
});




  // Set active link based on current page
// const activePage = document.body.dataset.active;
// document.querySelectorAll('#sidev .nav-link').forEach(link => {
//   link.classList.remove('active');
//   if (link.dataset.page === activePage) {
//     link.classList.add('active');
//   }
// });



const currentPage = window.location.pathname.split("/").pop();

document.querySelectorAll(".nav-link").forEach(link => {

  // remove old active class
  link.classList.remove("active");

  // add active to current page link
  if (link.getAttribute("href") === currentPage) {
    link.classList.add("active");
  }

});