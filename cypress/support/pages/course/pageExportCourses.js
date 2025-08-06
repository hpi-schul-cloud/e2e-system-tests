class ExportCourses {
    static fileName = "CC_Test_Kurs.imscc";

    verifyFile(fileNamePattern, renameTo, timeout) {
        return cy.task("fileExists", {
            directory: Cypress.config("downloadsFolder"),
            pattern: fileNamePattern,
            renameTo,
            timeout,
        })
    }

    commonCartridgeFileIsArchive() {
        return cy.task("commonCartridgeFileIsArchive", {
            directory: Cypress.config("downloadsFolder"),
            file: ExportCourses.fileName,
        });
    }

    commonCartridgeCleanUp() {
        return cy.task("commonCartridgeCleanUp", {
            directory: Cypress.config("downloadsFolder"),
            file: ExportCourses.fileName,
        });
    }

    commonCartridgeHasManifest(version, title) {
        return cy.task("commonCartridgeHasManifest", {
            directory: Cypress.config("downloadsFolder"),
            version,
            title,
        });
    }

    commonCartridgeHasOrganization(depth, title) {
        return cy.task("commonCartridgeHasOrganization", {
            directory: Cypress.config("downloadsFolder"),
            depth,
            title,
        });
    }

    commonCartridgeHasChild(orgId, title) {
        return cy.task("commonCartridgeHasChild", {
            directory: Cypress.config("downloadsFolder"),
            orgId,
            title,
        });
    }

    commonCartridgeHasWebcontent(orgId, pattern) {
        return cy.task("commonCartridgeHasWebcontent", {
            directory: Cypress.config("downloadsFolder"),
            orgId,
            pattern,
        });
    }

    commonCartridgeHasWeblink(orgId, url, title) {
        return cy.task("commonCartridgeHasWeblink", {
            directory: Cypress.config("downloadsFolder"),
            orgId,
            url,
            title,
        });
    }
}

export default ExportCourses;