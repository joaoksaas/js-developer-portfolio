async function fetchProfileData() {
  const url =
    "https://raw.githubusercontent.com/joaoksaas/js-developer-portfolio/refs/heads/projeto-base/data/profile.json";
  const fetching = await fetch(url);
  return fetching.json();
}
