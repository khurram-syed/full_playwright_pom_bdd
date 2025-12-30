import { DataTable, Then } from '@cucumber/cucumber'
import { CustomWorld } from '../../../support/CustomWorld';

    Then('user should see following tags', async function (this: CustomWorld, dataTable: DataTable) {
        const [data] = dataTable.hashes();
        await this.homePage.verifyTagsExist(data.Tags);

    });