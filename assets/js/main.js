function updateProfileInfo(profileData) {
  const photo = document.getElementById("profile-photo");
  photo.src = profileData.photo;
  photo.alt = profileData.name;

  const name = document.getElementById("profile-name");
  name.innerText = profileData.name;

  const job = document.getElementById("profile-job");
  job.innerText = profileData.job;

  const location = document.getElementById("profile-location");
  location.innerText = profileData.location;

  const phone = document.getElementById("profile-phone");
  phone.innerText = profileData.phone;
  phone.href = `tel:${profileData.phone}`;

  const email = document.getElementById("profile-email");
  email.innerText = profileData.email;
  email.href = `mailto:${profileData.email}`;
}

function updateSoftSkills(profileData) {
  const softSkills = document.getElementById("profile-skills-soft");

  softSkills.innerHTML = profileData.skills.softSkills
    .map((skill) => `<li>${skill}</li>`)
    .join("");
}

function updateHardSkills(profileData) {
  const hardSkills = document.getElementById("profile-skills-hard");

  hardSkills.innerHTML = profileData.skills.hardSkills
    .map(
      (skill) => `<li>
                  <img
                    src="${skill.logo}"
                    alt="${skill.nome}"
                    title="${skill.nome}"
                  />
                </li>`
    )
    .join("");
}

function updateLanguage(profileData) {
  const lang = document.getElementById("profile-languages");

  lang.innerHTML = profileData.languages
    .map((language) => `<li>${language}</li>`)
    .join("");
}

function updatePortfolio(profileData) {
  const portfolio = document.getElementById("portfolio");
  portfolio.innerHTML = profileData.portfolio
    .map((project) => {
      return `<li>
              <h3 class="title github">${project.nome}</h3>
              <div class="links">
                <a href="${project.gitHub}" target="_blank">Link Github</a>
                <a href="${project.certificado}" target="_blank">Link Certificado (DIO)</a>
              </div>
            </li>`;
    })
    .join("");
}

function updateEducation(profileData) {
  const ed = document.getElementById("education");
  ed.innerHTML = profileData.education
    .map((inst) => {
      return `<li>
              <h2 class="title">${inst.name}</h2>
              <h3 class="institution">${inst.institution}</h3>
              <p class="period">${inst.period} </p>
              <p>
                ${inst.description}
              </p>
            </li>`;
    })
    .join("");
}

(async () => {
  const profileData = await fetchProfileData();
  updateProfileInfo(profileData);
  updateSoftSkills(profileData);
  updateHardSkills(profileData);
  updateLanguage(profileData);
  updatePortfolio(profileData);
  updateEducation(profileData);
})();
