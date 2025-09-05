class CommonCartridge {
    static fileName = "CC_Test_Kurs.imscc";

    verifyFile(fileNamePattern, renameTo, timeout) {
        return cy.task("fileExists", {
            directory: Cypress.config("downloadsFolder"),
            pattern: fileNamePattern,
            renameTo,
            timeout,
        })
    }

    fileIsArchive() {
        return cy.task("commonCartridgeFileIsArchive", {
            directory: Cypress.config("downloadsFolder"),
            file: CommonCartridge.fileName,
        });
    }

    cleanUp() {
        return cy.task("commonCartridgeCleanUp", {
            directory: Cypress.config("downloadsFolder"),
            file: CommonCartridge.fileName,
        });
    }

    hasManifest(version, title) {
        return cy.task("commonCartridgeHasManifest", {
            directory: Cypress.config("downloadsFolder"),
            version,
            title,
        });
    }

    hasOrganization(depth, title) {
        return cy.task("commonCartridgeHasOrganization", {
            directory: Cypress.config("downloadsFolder"),
            depth,
            title,
        });
    }

    hasChild(orgId, title) {
        return cy.task("commonCartridgeHasChild", {
            directory: Cypress.config("downloadsFolder"),
            orgId,
            title,
        });
    }

    hasWebcontent(orgId, pattern) {
        return cy.task("commonCartridgeHasWebcontent", {
            directory: Cypress.config("downloadsFolder"),
            orgId,
            pattern,
        });
    }

    hasWeblink(orgId, url, title) {
        return cy.task("commonCartridgeHasWeblink", {
            directory: Cypress.config("downloadsFolder"),
            orgId,
            url,
            title,
        });
    }
}

export default CommonCartridge;
