
# Feedback
Also in deiner App waren so prozedual einfach viele Kleinigkeiten die falsch gelaufen sind. Ich habe das Ganze jetzt erstmal so angepasst,
dass zumindest die Liste an sich funktional ist.

Was mir hier entgegen der UI fehlt ist die Logik zur Kategorie (und git-versionierung).
Da du ja Packlisten in Kategorisiert hast, müsstest du natürlich auch irgendwie die Logik zu dieser Kategorisierung anbieten.

Ich sehe, dass du das bspw. im html angefangen hast - s.
`<div class="stuffsContainer money">`

aber der Typ category fehlt ja im Interface. Normalerweise müsstest du im Interface für Stuff ein Property category: string hinzufügen.
in ReloadList könntest du dann die Kategorie auslesen, und je nach Kategorie dem dementsprechenden Container zuweisen.

Auch bei addStuff müsstest du dann schauen welche id das Parent-DIV hat (money,papers, hygiene, ....) und das dann als category mit in die stuffs array packen.
bspw. s. addStuff kommentar:
`const category = targetInp.parentElement!.id;` <-- category

und in reloadList als Parameter auch die Kategorie mitgeben und je nach Kategorie den passenden Container dazu auswählen

Es wäre theoretisch noch möglich das umzuschreiben, je nach Wissensstand.



Ansonsten:
- Wenn du noch *kein* git repo hast, dann leg zumindest jetz eines an, wenn du noch sachen versuchst. damit du zumindest wieder zum funktionierenden Stand zurückkehren kannst.
- die id in stuff.ts sollte einzigartig für jeden Eintrag sein. Wenn du überall 1 eingibst, dann ist das nicht mehr gegeben.

Für den Projektteil nochmal anschauen:
- Wie funktionieren Interfaces
- Wie funktionieren Arrays ( wie kann ich durchiterieren, etc..)
- Wie funktionieren Objekte
- Browser DevTools
- Funktionen (Wozu sind sie da, was sind Parameter, etc..)
- DOM Manipulation
- Debugging
- Allgemein JavaScript Syntax Basics etc..